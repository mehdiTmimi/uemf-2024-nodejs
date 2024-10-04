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
    // promise => cette maniere est sync
    try {
        let data = await fs.promises.readFile("./dataa.json")
        let todos = JSON.parse(data)
        console.log(todos.length)
    }catch(e){
        console.log(e)
    }
    console.log("apres lecture")

}
main2()