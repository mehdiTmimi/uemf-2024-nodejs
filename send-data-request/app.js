// /add1 => headers
// /add2 => url (query param)
// /add3 => url (/)
// /add4 => body
// /add5 => cookies

const http = require("http")
const saveTodo = require("./persistence")
const PORT = 3000
const server = http.createServer((req, res) => {
    const { url, method } = req
    if (url == "/add1" && method == "POST") {
        console.log("/add1 context (headers)")
        let { task, duration } = req.headers
        if (!task || !duration) {
            // status code 400
            res.statusCode = 400
            res.write("please fill all the required fields")
            return res.end()
        }
        saveTodo({ task, duration }).then(()=>{
            res.statusCode=201
            res.write("insertion reussie")
            res.end()
        })
            .catch((e) => {
                console.log(e)
                res.statusCode = 500
                res.write("server problem ! sorry")
                res.end()
            })
    }
    else {
        res.statusCode = 404
        res.write("not found")
        res.end()
    }
})
server.listen(PORT, () => console.log(`server started at ${PORT}`))
