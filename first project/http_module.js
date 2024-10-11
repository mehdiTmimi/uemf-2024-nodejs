const http = require("http")
const fs = require("fs")
const server = http.createServer((request, response) => {
    fs.promises.readFile("./index.html")
        .then(data => {
            data = data.toString()
            response.setHeader("content-type", "text/html")
            response.statusCode = 200
            response.statusMessage = "OK"
            response.write(data)
        })
        .catch(err => {
            response.statusCode = 500
            response.statusMessage = "Internal server error"
            response.write("desole, on a un probleme dans le serveur")

        })
        .finally(() => {
            response.end()
        })
})// callback qui accepte deux params et qui sera
// execute pour chaque requete recu
server.listen(3000, () => {
    console.log("server started at ", 3000)
})