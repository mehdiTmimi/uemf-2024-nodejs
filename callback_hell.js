// NBR => NBR + 1 => res * 2 => res -1

let f1 = (nbr, successFn, echecFn) => {
    setTimeout(() => successFn(nbr + 1), 2000)
}
let f2 = (nbr, successFn, echecFn) => {
    setTimeout(() => successFn(nbr * 2), 3000)
}
let f3 = (nbr, successFn, echecFn) => {
    setTimeout(() => successFn(nbr - 1), 4000)
}
let main = () => {
    let x = 5
    f1(x, (x2) => {
        f2(x2, (x3) => {
            f3(x3, (x4) => { console.log(x4) }, () => { })
        }, () => { })
    }, () => { })
}
//main()
let ff1 = (nbr) => new Promise((resolve, reject) => {
    //reject("error ff1")
    setTimeout(() => resolve(nbr + 1), 2000)
})
let ff2 = (nbr) => new Promise((resolve, reject) => {
    reject("error ff2")
    setTimeout(() => resolve(nbr * 2), 3000)
})
let ff3 = (nbr) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(nbr - 1), 4000)
})
let main2 = () => {
    let x = 5
    ff1(x)
    .then(data=>ff2(data))
    .then(data=>ff3(data))
    .then(data=>console.log(data))
}
main2()

