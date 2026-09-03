var prompt = require('prompt-sync')();


let n = Number(prompt("entrer un nombre: "));
let f = 1;

for(let i = 1; i <= n; i++ ){
    f= f*i;
}
console.log(n +"!=" + f)
