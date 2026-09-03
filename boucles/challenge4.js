var prompt = require('prompt-sync')();


let n = Number(prompt("entrer un nombre: "));

for(let i = 1 ; i<=n; i+=2){
    console.log(i)
}