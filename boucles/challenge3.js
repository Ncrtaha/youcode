var prompt = require('prompt-sync')();


let n = Number(prompt("entrer un nombre: "));
let r = 0;
let formule = "";
for (let i = 1; i <= n; i++) {
        r += i;
    }

console.log(r)