const fs = require("fs")
const http = require("http")
const PORT = 3000
const configServer = (request,response)=>{
    if(request.method=="GET" && request.url.startsWith("/users"))
    {
        let limit = -1;
        if(request.url.split("?").length!=1)
        {
            let queryParams = request.url.split("?")[1].split("&")
            console.log(queryParams)
            queryParams.forEach(val=>{
                let clef = val.split("=")[0]
                let value = val.split("=")[1]
                if(clef.toLowerCase()=="limit")
                {
                    limit=value
                }
            })
            console.log(limit)
        }
        fs.promises.readFile("./database.json")
        .then(data=>data.toString()) // on retour une nouvelle promesse avec la valeur data.toString
        //.then(data=>{return data.toString()}) 
        .then(data=>JSON.parse(data))
        .then(data=>{
            if(limit == -1 || limit > data.users.length)
                limit=data.users.length
            response.status=200
            response.setHeader("Content-Type","application/json")
            response.write(JSON.stringify(data.users.filter((val,index)=>index<limit)))
        })
        .catch(e=>{
            response.status = 500
            console.error(e)
            response.write("sorry we have a server problem!")
        })
        .finally(()=>response.end())// envoie de la response
    }
    else{
        response.status="404"
        response.write("not found !!!!!")
        response.end()
    }

}
const server = http.createServer(configServer)

server.listen(PORT,()=>{ // demarrage du serveur
    console.log("server started at ", PORT)
})