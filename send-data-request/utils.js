const extractUrlQueryParam = (ch)=>{
    let keyValuePairs = ch.split("&")
    let obj = {}
    keyValuePairs.forEach(val=>{
        let tab = val.split("=")
        obj[tab[0].trim()]=tab[1].trim() // obj.property === obj['property']
    })
    return obj
}

const extractCookies = (ch)=>{
    let keyValuePairs = ch.split(";")
    let obj = {}
    keyValuePairs.forEach(val=>{
        let tab = val.split("=")
        obj[tab[0].trim()]=tab[1].trim() // obj.property === obj['property']
    })
    return obj
}

module.exports={
    extractCookies
}