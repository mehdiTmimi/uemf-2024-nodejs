// arrow function est une deuxieme maniere de la creation des fonctions anonyme 
// contrairement aux fonction (function) ils ne permettent pas de creer des classes
// syntax :
// (params) => { contenu }
// exemple: (a,b)=>{ 
//    let s = a+b; 
//    return s;
//}
// =====> abreviations
// 1 - les () des arguments sont facultatifs si on a 1 seul param
// 2- les {} du contenu sont facultatifs si on a 1 seule instruction
// 3- dans l'absence des {} => un return implicite est rajoute

// a=> a>0 
// function(a){return a>0} => il determine est ce que le nombre est positif ou negatif
/**
 * let teste2 = (a) => {
    if(a>0)
        return true
    return false
}
 */


/*function x(){
    console.log("salam");
}
 let x = ()=> console.log("salam"); 
*/

/*
let F=()=>{let y=10;
    console.log(y)
}

let F = function(){
    let y=10;
    console.log(y)
}
 */


