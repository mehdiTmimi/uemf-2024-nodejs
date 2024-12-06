const http = require("http")
const PORT = 3000
const server = http.createServer((req, res) => {

    if (req.method == "GET" && req.url.startsWith("/operation/")) {
        let operation = req.headers.operation
        let params = req.url.split("/")
        let nbr1 = parseInt(params[2])
        let nbr2 = parseInt(params[3])
        let result;
        if (operation == "+")
            result = nbr1 + nbr2
        else if(operation == "-")
            result = nbr1 - nbr2
        else if(operation == "/")
            result = nbr1 / nbr2
        else if(operation == "*")
            result = nbr1 * nbr2
        res.write(JSON.stringify({
            nbr1,
            nbr2,
            operation,
            result
        }))
        return res.end()
    }
})
server.listen(PORT, (err) => {
    if (err)
        console.error(err)
    else console.log("server started at " + PORT)
})