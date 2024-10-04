// callback = le fait de faire passer une fct comme param

let devinette = (nbr)=>{
    let luckyNbr= Math.floor(Math.random()*10)+1
    if(nbr==luckyNbr)
        console.log("you win")
    else
        console.log("unlucky !")
}
devinette(3)
// probleme: le traitement en cas de reussi ou echec est fige(accent)
// solution => delegation => callback

let devinetteAmeliore = (nbr,successFn,echecFn)=>{
    let luckyNbr= Math.floor(Math.random()*5)+1
    if(nbr==luckyNbr)
        successFn()
    else
        echecFn(luckyNbr)
}
devinette(3,
    function(){alert("bravo")}, 
    (x)=>console.log("unluckyyyy!! la devinette etait",x))

//Nb: on peut associer nos calbback a des variables puis les utiliser
let success = function(){alert("bravo")}
let echec= (x)=>console.log("unluckyyyy!! la devinette etait",x)
devinette(3,success, echec)