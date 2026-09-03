var prompt = require('prompt-sync')();


let n1 = +prompt("Entrer le Premier nombre: ");
let n2 = +prompt("Entrer le deusiem nombre: ");
let n3 = +prompt("Entrer le troisieme nombre: ");

let M ;

M = n1*2 + n2*3 + n3*5
M = M / 2+3+5

console.log("La moyenne est:"+ M)
