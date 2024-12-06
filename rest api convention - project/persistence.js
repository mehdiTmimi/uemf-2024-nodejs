const fs = require("fs")
class UserPersistence {
    constructor(dbPath) {
        this.dbPath = dbPath
        this.users = {}

    }
    load1() {
        return new Promise((resolve, reject) => {
            fs.promises.readFile(this.dbPath)
                .then(data => JSON.parse(data.toString()))
                .then(data => {
                    this.users = data
                    resolve()
                })
                .catch(e => {
                    console.log(e, "impossible d initialiser data")
                    reject(e)
                })
        })
    }
    async load2() {
        try {
            let data = await fs.promises.readFile(this.dbPath)
            data = JSON.parse(data.toString())
            this.users = data
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }
    async insert(user) {
        if (this.get(user.id)) {
            throw new Error("user already exist")
        }
        this.users.list.push(user)
        await this.sychroniser()
        return user
    }
    async sychroniser() {
        await fs.promises.writeFile(this.dbPath, JSON.stringify(this.users, null, 2))
    }
    async delete(id) {
        let user = this.get(id)
        if (!user) {
            throw new Error("user does not exist to be deleted")
        }
        this.users.list = this.users.list.filter(ele => ele.id != id)
        await this.sychroniser()
        return user
    }
    update(id, user) {
        let u = this.get(id)
        if (!u) {
            throw new Error("user does not exist to be deleted")
        }
        u.name = user.name || u.name
        u.city = user.city || u.city
        return this.sychroniser()

    }
    get(id) {
        // recuperer tout le tableau
        // searcher dans le tableau
        // soit retournir undefined soit object
        return this.users.list.find(ele => ele.id == id)
    }
    getAll() {
        return this.users
    }
}
let main = async () => {
    let userPersistence = new UserPersistence("./database.json")
    await userPersistence.load1()
    userPersistence.insert({ id: 545774, name: "ali", city: "fez" })
        .then((u) => { console.log("inserted with success", u) })
        .catch(e => console.log(e))
    console.log("fin")

    /* let data = await userPersistence.getAll()
     let tab = data.list
     console.log(tab)
     //console.log((await userPersistence.getAll()).list)
     */
    console.log(userPersistence.get(5454))
}
main()