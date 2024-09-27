// sytanx
// function name_function(parametres){

//}
// deux types de fonction: fonction nommee et fonction anonyme
// exemple: fonction nommee => function f(){}
// fonction anonyme => function(){}
// toutes les fonctions retournent. soit undefined soit il retourne ce que vous avez mentionne
/*function f1(){

}
let res = f1()
console.log(res) // => undefined

function f2(){
 return 20
}
let res2 = f2()
console.log(res2)
*/


// parametres
function somme(a=1,b=2){
    return a+b
}
console.log(somme(1,5,54,654,657,45,456,"OOOOK"))
console.log(somme(1))
console.log(somme())
console.log(somme(4,5))
function somme2(a=1,b=2){
    console.table(arguments)// c 'est un tableau injecte par js qui contient tous les
    // parametres envoyes
}
console.log(somme2(1,5,54,654,657,45,456))

function moyenne(){
    let s = 0
    for(let i=0;i<arguments.length;i++){
        s+=arguments[i]
    }
    return s/arguments.length
}
console.log(moyenne(10,20,30))

let moyenne2 = function(x, ...notes){ // rest parameter
    let s = 0
    for(let i=0;i<notes.length;i++){
        s+=notes[i]
    }
    return s/notes.length
}
let ff = moyenne2
console.log(moyenne2(10,20,30))

