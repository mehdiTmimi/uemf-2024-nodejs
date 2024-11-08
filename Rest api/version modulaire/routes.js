const { removeUser } = require("./persistence")

const configServer = (request, response) => {
    // url : method delete et domain-name:port/users/cd3
    if (request.method == "DELETE" && request.url.startsWith("/users/")) {
        console.log("modulaire delete")
        let id = request.url.split("/")[2]
        removeUser(id).then(resultat => { // resultat soit null soit object
            if (resultat)  // resultat !=null et undifned et NaN et 0 et ""
            // suppression
            {
                response.setHeader("Content-Type", "application/json")
                response.statusCode = 200
                response.write(JSON.stringify(resultat))
                response.end()
            }
            else {
                response.statusCode = 404
                response.write("user avec id = " + id + " is not found !!!!!")
                response.end()
            }
        })
        .catch(e=>{
            response.status = 500
            console.error(e)
            response.write("sorry we have a server problem!")
            response.end()
        })
    }
    // GET /users/id => http://localhost:3000/users/5
    else if (request.method == "GET" && request.url.startsWith("/users/")) {
        let id = request.url.split("/")[2]
        fs.promises.readFile("./database.json")
            .then(data => data.toString())
            .then(data => JSON.parse(data))
            .then(data => { // c'est l'objet users du database.json
                let resultat = data.users.find(value => value.id == id)
                if (resultat) {
                    response.setHeader("Content-Type", "application/json")
                    response.statusCode = 200
                    response.write(JSON.stringify(resultat))
                    response.end()
                }
                else {
                    response.statusCode = 404
                    response.write("user avec id = " + id + " is not found !!!!!")
                    response.end()
                }
            })
    }
    else if (request.method == "GET" && request.url.startsWith("/users")) {
        let limit = -1;
        if (request.url.split("?").length != 1) {
            let queryParams = request.url.split("?")[1].split("&")
            console.log(queryParams)
            queryParams.forEach(val => {
                let clef = val.split("=")[0]
                let value = val.split("=")[1]
                if (clef.toLowerCase() == "limit") {
                    limit = value
                }
            })
            console.log(limit)
        }
        fs.promises.readFile("./database.json")
            .then(data => data.toString()) // on retour une nouvelle promesse avec la valeur data.toString
            //.then(data=>{return data.toString()}) 
            .then(data => JSON.parse(data))
            .then(data => {
                if (limit == -1 || limit > data.users.length)
                    limit = data.users.length
                response.status = 200
                response.setHeader("Content-Type", "application/json")
                response.write(JSON.stringify(data.users.filter((val, index) => index < limit)))
            })
            .catch(e => {
                response.status = 500
                console.error(e)
                response.write("sorry we have a server problem!")
            })
            .finally(() => response.end())// envoie de la response
    }


    else {
        response.statusCode = "404"
        response.write("not found !!!!!")
        response.end()
    }
}
module.exports = configServer