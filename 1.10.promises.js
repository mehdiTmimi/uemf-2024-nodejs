// motivation = repondre a la problematique des callback hell
// maniere plus adequate pour gerer sync et async execution
// syntax 
let promisePairFct = () => new Promise((resolve, reject) => {
    let luckyNbr = Math.floor(Math.random() * 1000) + 1
    setTimeout(() => {
        if (luckyNbr % 2 == 0)
            resolve(luckyNbr)
        else
            reject("echec impossible de trouver un nbr pair!")
    }, 3000)
})

// execution de la promise async
console.log("debut")
promisePairFct().then((data) => { console.log("le nombre pair est ", data) })
    .catch((err) => { console.log("erreur:", err) })
    .finally(() => { console.log("inside finallyyy") })
console.log("fin")
//execution en mode synchrone

console.log("debut")
// .then => await
try {
    let res = await promisePairFct() // vous recuperer le resolve(value)
    console.log("success",res)
} catch (e) {
    console.error(e)
}
console.log("inside finallyyy")
console.log("fin")