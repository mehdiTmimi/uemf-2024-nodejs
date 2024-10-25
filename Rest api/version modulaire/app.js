// app.js => creation du serveur

// routes.js => endpoints : GET , Get by Id, Delete by Id

// persistence.js => gestion de la base de donnes
// => search, delete , getAll
const http = require("http")
// le callback du createServer vous allez l importer du routes.js
const server = http.createServer()
server.listen(3000,()=>{
    console.log("server started at 3000")
})