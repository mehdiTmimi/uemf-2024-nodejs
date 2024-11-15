// /add1 => headers
// /add2 => url (query param)
// /add3 => url (/)
// /add4 => body
// /add5 => cookies

const http = require("http")
const saveTodo = require("./persistence")
const { extractCookies } = require("./utils")
const PORT = 3000
const server = http.createServer((req, res) => {
    const { url, method } = req

    if (method == "POST" && url.toLowerCase("/add6")) { // Add4 aDD4
        let body = ""
        req.addListener('data', (chunk) => {
            body += chunk.toString()
        })
        req.addListener('end', () => {
            try {
                body = JSON.parse(body)
            } catch (e) {
                res.statusCode = 400
                res.setHeader("Content-type", "application/json")
                res.write(JSON.stringify({
                    msg: "invalid json body"
                }))
                return res.end()
            }
            let { tasks } = body
            let promises = []
            tasks.forEach(element => {
                let { task, duration } = element
                if (task && duration)
                    promises.push(saveTodo({ task, duration }))
            });
            Promise.all(promises)
                .then(() => {
                    res.statusCode = 201
                    res.write("insertion reussie")
                    res.end()
                })
                .catch(e => {
                    console.log(e)
                    res.statusCode = 500
                    res.write("server problem ! sorry")
                    res.end()
                })
            

        })


    }
    else if (method == "POST" && url.toLowerCase("/add4")) { // Add4 aDD4
        let body = ""
        req.addListener('end', () => {
            try {
                body = JSON.parse(body)
            } catch (e) {
                res.statusCode = 400
                res.setHeader("Content-type", "application/json")
                res.write(JSON.stringify({
                    msg: "invalid json body"
                }))
                return res.end()
            }
            let { task, duration } = body
            sendResponse(task, duration, res)

        })
        req.addListener('data', (chunk) => { // le callback sera execute a chaque reception d une partie du body 
            console.log("reception du contenu de body ", chunk)
            body += chunk.toString()
        })

    }
    //add5 cookies
    else if (method == "POST" && url == ("/add5")) {
        //req.headers.cookie  contains a string of cookies
        // in the form of key=value;key=value
        let cookies = extractCookies(req.headers.cookie)
        let { task, duration } = cookies
        return sendResponse(task, duration, res)
    }
    // add3 en utilisant url
    // /add3/dentiste/5h
    else if (method == "POST" && url.startsWith("/add3/")) {
        let splits = url.split("/")
        let task = splits[2]
        let duration = splits[3]
        return sendResponse(task, duration, res)
    }
    // add2 en utilisant query param
    // /add2?task=cook&duration=3h
    else if (method == "POST" && url.startsWith("/add2?")) {
        let params = url.split("?")[1]
        params = new URLSearchParams(params)
        let task = params.get("task")
        let duration = params.get("duration")
        return sendResponse(task, duration, res)
    }
    // add1 en utilisant les headers
    else if (url == "/add1" && method == "POST") {
        console.log("/add1 context (headers)")
        let { task, duration } = req.headers
        return sendResponse(task, duration, res)
    }
    else {
        res.statusCode = 404
        res.write("not found")
        res.end()
    }
})

const sendResponse = (task, duration, res) => {
    if (!task || !duration) {
        // status code 400
        res.statusCode = 400
        res.write("please fill all the required fields")
        return res.end()
    }
    saveTodo({ task, duration }).then(() => {
        res.statusCode = 201
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
server.listen(PORT, () => console.log(`server started at ${PORT}`))
