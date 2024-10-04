// different manieres de creation d'object
// 1- en passant par function (voir 1.4.orient object.js)
// 2 - en utlisant keyword class
class Personne{
    constructor(nom,age){
        this.nom=nom // public
        this.age=age
    }
    sePresenter(){
        console.log(this.nom,this.age)
    }
}
let p = new Personne("MEHDI" , 32)
p.sePresenter()

// 3 - en utilisant {}

let o = {}
let o2 = {name:"ali",age:20,address:"fez", salut:()=>{console.log('hi')}}
console.log(o2, typeof(o2))
o2.salut()

// 4- en utlisant new Object()
let o3 = new Object()
console.log(o3, typeof(o3))

// NB: 
// ajouter des attributs
p.telf="0235345346" // applicable a tous type d'objet
console.log(p)
// supprimer un attribut
delete(p.age) // applicable a tous type d'objet
console.log(p)