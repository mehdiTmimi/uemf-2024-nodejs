const fs = require("fs")
const PathDatabase= "./database.json"
const saveTodo = (todo)=> fs.promises.readFile(PathDatabase)
    .then(data=>data.toString()) // buffer vers Json string
    .then(data=>JSON.parse(data))// json string vers Object
    .then(data=>{
        data.todos.push(todo) // insertion dans le tableau
        return data
    })
    .then(data=>JSON.stringify(data,null,3)) // object vers json string
    .then(jsonData=> fs.promises.writeFile(PathDatabase,jsonData));
   // .then(()=>1) // je retourn une promesse with value 1

//saveTodo({task:"ok",duration:"3h"})
module.exports = saveTodo