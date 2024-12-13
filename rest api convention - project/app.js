// creer un web service respectant la convention REST
// la ressource est : user
// lire tout, lire une seule ressource, ajouter, supprimer et modifier, default: 404

const http = require("http")
const UserPersistence = require("./persistence")
const PORT = 3000
let userPersistence = new UserPersistence("./database.json")

const app = http.createServer((req, res) => {

    const { url, method } = req
    res.setHeader("Content-Type","application/json")
    if (method == "GET" && url.toLowerCase() == "/users") {
        let users = userPersistence.getAll().list
        res.statusCode = 200
        res.write(JSON.stringify(users,null,3))
        res.end()
    }
    else if (method == "GET" && url.toLowerCase().startsWith("/users/")) {

    }
    else if (method == "PUT" && url.toLowerCase().startsWith("/users/")) {

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
