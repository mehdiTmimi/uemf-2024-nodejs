// les variables sont non typees
// => on a pas besoin de specifier le type au moment de la declaration
// => on peut passer d un type a l autre sans probleme
var x = 10
console.log(x, typeof(x))
x = "salam"
console.log(x , typeof(x))

// declaration
// var est strictement interdit
var v1 = 10
let v2 = 10 // block scope
const V3 = 10

// exemple
/*
if(1==1){
    let nbr = 20
    console.log("au sein du if",nbr)
}
console.log("apres if",nbr)
*/
if(1==1){
    var nbr2 = 20
    console.log("au sein du if",nbr2)
}
console.log("apres if",nbr2)

//------ Conventions -------
// 1- debut ern minimuscul
// 2- le premier caractere de chaque mot commence par majuscule
// exemple : let nbrEtudiantPresent
// NB: const => tout en majuscul
// exemple : const PI= 3.14

// types:
/*
number
string
boolean
object
function
undefined
bigInt
*/