var prompt = require('prompt-sync')();

let n = Number(prompt("entrer un nombre: "));
let F0 = 0;
let F1= 1;
let Fn ;
for(let i = 0 ; i < n ; i++){
    Fn= F0 + F1;
    F1 = F0;
    F0 = Fn;
}
console.log(F0);
