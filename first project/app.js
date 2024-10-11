const fs = require("fs") //

fs.promises.writeFile("./data.txt","salut uemf").then(()=>{
    console.log("success")
}).catch(e=>console.error(e))
fs.writeFile("./data2.txt","salut uemf",(err)=>{
    if(err)
        return console.error(err)
    console.log("success2")
})
try{
fs.writeFileSync("./data3.txt","salut uemf")
console.log("success3")
}catch(e)
{
    console.error(e)
}
