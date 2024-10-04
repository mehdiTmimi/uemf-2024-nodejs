const fs = require("fs")
// callback (async)
fs.readFile("./data.json",(err,data)=>{
    let todos = JSON.parse(data)
    console.log(todos.length)
})
// promise => cette maniere est async
fs.promises.readFile("./data.json").then((data)=>{
    let todos = JSON.parse(data)
    console.log(todos.length)
}).catch((err)=>console.log(err))

// classic (sync)
let data = fs.readFileSync("./data.json")
let todos = JSON.parse(data)
console.log(todos.length)