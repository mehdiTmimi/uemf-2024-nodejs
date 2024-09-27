// en js, le fait de creer une fonction avec le keyword function => que vous etes
// entrain de creer un constructeur d une classe qui porte le meme nom de la fonction
/*function Personne(){

}
let p = new Personne()
console.log(typeof(p))
*/
// exemple de classe sans encapsulation
/*
function Personne(_name,_age){
    this.name=_name // public String name
    this.age=_age
    this.sePresenter = function(){
        console.log("je suis ", this.name," et j ai", this.age)
    }
}
let p = new Personne("mehdi",32)
p.age = -20
p.sePresenter()
*/
// exemple de classe avec encapsulation
function Personne(_name,_age){
    let name =_name // private String name
    let age = _age
    this.sePresenter = function(){
        console.log("je suis ", name," et j ai", age)
    }
    this.setAge = function(_age){
        if(_age>0)
            age = _age
    }
    this.getAge = function(){
        return age
    }
}
let p = new Personne("mehdi",32)
console.log("age = " , p.age)
p.age = 20
p.setAge(-20)
console.log("age = " , p.age)
p.sePresenter()