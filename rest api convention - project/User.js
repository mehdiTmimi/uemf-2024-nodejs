class User {
    constructor(id, name, city) {
        this.id = id
        this.name = name
        this.city = city
    }
    toJson() {
        return JSON.stringify(this)
    }
}
module.exports = User
/*
let u = new User(1, "mehdi", "fez")
console.log(u.toJson())
*/