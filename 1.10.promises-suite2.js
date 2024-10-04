const fs = require("fs")
// asychrone
const main = () => {
    console.log("avant lecture")

    // promise => cette maniere est async
    fs.promises.readFile("./data.json").then((data) => {
        let todos = JSON.parse(data)
        console.log(todos.length)
    }).catch((err) => console.log(err))

    console.log("apres lecture")
}


// sychrone
const main2 = async () => {
    console.log("avant lecture")

    // promise => cette maniere est sync
    let data = await fs.promises.readFile("./data.json")
    let todos = JSON.parse(data)
    console.log(todos.length)
    console.log("apres lecture")
}
main2()