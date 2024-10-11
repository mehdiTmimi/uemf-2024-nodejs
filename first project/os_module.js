const os = require("os")

let free = os.freemem()
console.log(free)
console.log(os.platform())
console.log(os.cpus())