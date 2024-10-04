// motivation = repondre a la problematique des callback hell
// syntax 
let promisePair = new Promise((resolve,reject)=>{
    let luckyNbr= Math.floor(Math.random()*1000)+1
    if(luckyNbr%2==0)
        resolve(luckyNbr)
    else
        reject("echec impossible de trouver un nbr pair!")
})

promisePair
.then((data)=>{ console.log("le nombre pair est ",data)})
.catch((err)=>{console.log("erreur:",err)})
.finally(()=>{console.log("inside finallyyy")})