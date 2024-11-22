const fs = require("fs")
class UserPersistence {
    constructor(dbPath) {
        this.dbPath = dbPath
        this.users = {}
        
    }
    load1() {
       return new Promise((resolve,reject)=>{
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
    async load2(){
        try{
           let data =  await fs.promises.readFile(this.dbPath)
           data = JSON.parse(data.toString())
           this.users = data
           return true
        }catch(e){
            console.log(e)
            return false
        }
    }
    async insert(user) {
        this.users.list.push(user)
        await fs.promises.writeFile(this.dbPath,JSON.stringify(this.users,null,2))
        return user
    }
    delete(id) {

    }
    update(id, user) {

    }
    get(id) {

    }
    getAll() {

    }
}
let main = async()=>{
    let userPersistence = new UserPersistence("./database.json")
    await userPersistence.load1()
    userPersistence.insert({id:5454,name:"ali",city:"fez"})
    .then((u)=>{console.log("inserted with success",u)})
    .catch(e=>console.log(e))
    console.log("fin")
}
main()

