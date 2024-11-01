const fs = require("fs") //filesytem module

// en mode asynchrone
fs.promises.writeFile("./data.txt","salut uemf").then(()=>{
    console.log("success")
}).catch(e=>console.error(e))
// en mode asynchrone
fs.writeFile("./data2.txt","salut uemf",(err)=>{
    if(err)
        return console.error(err)
    console.log("success2")
})

// en mode synchrone
try{
fs.writeFileSync("./data3.txt","salut uemf")
console.log("success3")
}catch(e)
{
    console.error(e)
}
// difference:
// en mode synchrone, on peut pas passer a la prochaine instruction sans
// terminer l instruction actuelle