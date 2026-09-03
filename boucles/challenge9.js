var prompt = require('prompt-sync')();

let n = Number(prompt("entrer la serie des nombre : "));
let c = 0;

while (n > 0) {
    n = Math.floor(n / 10);
    c++;
}

console.log(c);