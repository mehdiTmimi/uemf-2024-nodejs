// tout array est un object
// dynamique => taille dynamique
// heterogene => chaque case du tableau peut avoir n importe quel type
// syntax:
/*let tab = new Array()
let tab2 = []
console.log(typeof (tab))
console.log(typeof (tab2))

let tab3 = [1, 24, 55, "salut", 
    [1, 2], true, 
    () => { console.log("salut") }, 
    function () { console.log('ok') }]
console.table(tab3)
tab3[6]()
tab3[6]=20
console.table(tab3)*/

// property
// longeur => length
let tab = [1, 20, 0, 3]
console.log("taille", tab.length)
//methods / functions
//1- forEach
// classic:
for (let i = 0; i < tab.length; i++)
    console.log(tab[i])
console.log("---------")
// forEach
tab.forEach((value, index, c, d) => console.log(value, index, c, d))

// prototype du foreach
/*
    class Array{
        T : tableau
        length : int

        void forEach(fct:function){
            if(fct!=null && type de fct est une fonction)
            {
                for(let i=0;i<length;i++)
                    fct(T[i], i , T)
            }
        }
    }
*/

// 2- ajouter des elements
// push => a la fin
// unshift => au debut
tab.push(99)
tab.unshift(-20)
console.table(tab)

// 3- search
// find => la position de l element si jamais trouve en commencant par le debut de tableau
let res = tab.find((value) => value > 5)
console.log(res)
//findLast
res = tab.findLast((value) => value > 5)
console.log(res)
//findIndex
res = tab.findIndex((value) => value > 5)
console.log(res)
//findLastIndex
res = tab.findLastIndex((value) => value > 5000)
console.log(res)

//4 - filter
res = tab.filter((value) => value > 5)
console.log(res)

//5- map

res = tab.map((value)=> value+10)
console.log(res)

