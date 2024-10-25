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
            resolve(resultat == undefined ? null : resultat)
        })
        .catch(e => reject(e))
});

const getAll = async () => {
    let data = await fs.promises.readFile(PathDb)
    data = JSON.parse(data.toString())
    return data
}

const removeUser = async (id) => {
    let user = await search2(id)
    if (!user)
        return null
    let { users } = await getAll()
    /*
    let data = await getAll()
    let users = data.users
    */
    users = users.filter(val => val.id != id)
    await fs.promises.writeFile(PathDb, JSON.stringify({ users }, null, 3))
    return user
}
removeUser(1).then(res=>console.log(res))
module.exports = {
    search,search2,getAll,removeUser
}