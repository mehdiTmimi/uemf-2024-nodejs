const http = require("http")

const server = http.createServer((request,response)=>{
    console.log("requete recu !")
    response.statusCode=400
    response.setHeader("content-type","text/html")
    response.setHeader("name","mehdi")
    response.statusMessage = "teste"
    response.write("<h1>salut</h1>")
    response.end()
})// callback qui accepte deux params et qui sera
// execute pour chaque requete recu
server.listen(3000,()=>{
    console.log("server started at ", 3000)
})