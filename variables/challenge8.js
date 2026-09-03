var prompt = require('prompt-sync')();


let a = +prompt("entre le nombre a : ");
let b = +prompt("entre le nombre b : ");
let c = +prompt("entre le nombre c : ");
let M ;

M = (a * b * c)**(1/3)

console.log("La moyenne geometrique est =" + M)