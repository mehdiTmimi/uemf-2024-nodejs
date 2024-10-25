const fs = require("fs")
const PathDb = "./database.json"
// params: Id , retour => user  | null
const search = async (id) => {
    let data = await fs.promises.readFile(PathDb)
    data = data.toString()
    data = JSON.parse(data)
    let resultat = data.users.find(value => value.id == id)
    return resultat == undefined ? null : resultat
}
const search2 = (id) => new Promise((resolve, reject) => {
    fs.promises.readFile("./database.json")
        .then(data => data.toString())
        .then(data => JSON.parse(data))
        .then(data => { // c'est l'objet users du database.json
            let resultat = data.users.find(value => value.id == id)
            resolve( resultat == undefined ? null : resultat)
        })
        .catch(e=>reject(e))
});
search2(1).then(data => console.log(data))