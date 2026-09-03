var prompt = require('prompt-sync')();

let base = Number(prompt("entrer le nombre:"))
let ex = Number(prompt("entrer l' exposant:"))

let com = 1 ;

for(let i = 0 ; i < ex ; i++){
    com = com *  base;
}

console.log(com);