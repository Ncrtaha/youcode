var prompt = require('prompt-sync')();


let long = +prompt("Enter la longeur :");
let lar = +prompt("Enter la alrgeur :");

let S ;
S = long * lar;

console.log("la surface est " + S);