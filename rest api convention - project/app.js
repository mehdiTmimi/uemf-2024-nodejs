// creer un web service respectant la convention REST
// la ressource est : user
// lire tout, lire une seule ressource, ajouter, supprimer et modifier, default: 404

const http = require("http")
const UserPersistence = require("./persistence")
const User = require("./User")
const PORT = 3000
let userPersistence = new UserPersistence("./database.json")

const app = http.createServer((req, res) => {

    const { url, method } = req
    res.setHeader("Content-Type", "application/json")
    if (method == "GET" && url.toLowerCase() == "/users") {
        let users = userPersistence.getAll().list
        res.statusCode = 200
        res.write(JSON.stringify(users, null, 3))
        res.end()
    }
    // 1 seul user => recherche par id
    else if (method == "GET" && url.toLowerCase().startsWith("/users/")) {
        let id = url.split("/")[2]
        let user = userPersistence.get(id)
        if (user) {
            res.write(JSON.stringify(user))
            res.end()
        }
        else {
            res.statusCode = 404
            res.write(JSON.stringify({
                msg: "user not found",
                id
            }))
            res.end()
        }
    }
    else if (method == "PUT" && url.toLowerCase().startsWith("/users/")) {
        let id = url.split("/")[2]
        let body = ""
        req.on("end", () => {
            try{
                body = JSON.parse(body)

            }
            catch(e){
                console.error(e)
                res.statusCode = 400
                res.write(JSON.stringify({
                    msg:"the body must be a json string"
                }))
                return res.end()
            }
            let {name,city} = body
            // verification des donnees
            if(id && name && city)
            {
                let user = new User(id,name,city)
                userPersistence.update(id,user)
                .then(()=>{
                    res.write(JSON.stringify({
                        msg:"ressource updated with success",
                        user
                    }))
                    res.end()
                })
                .catch(e=>{
                    console.error(e)
                    sendHttp500Response(res)
                })
            }
        })
        req.on("data", (chunk) => {
            body += chunk
        })
    }
    else if (method == "DELETE" && url.toLowerCase().startsWith("/users/")) {

    }
    else if (method == "POST" && url.toLowerCase() == "/users") {

    }
    else {
        //404
    }
})

userPersistence.load1().then(() => {
    app.listen(PORT, (err) => {
        if (err)
            return console.error(err)
        console.log(`server started at ${PORT}`)
    })
})
    .catch(e => {
        console.log(e)
    })
const sendHttp500Response = (res=>{
    res.statusCode=500
    res.write(JSON.stringify({
        msg:"problem in the server"
    }))
    res.end()
})