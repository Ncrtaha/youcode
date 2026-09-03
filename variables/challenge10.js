var prompt = require('prompt-sync')();


const pi = 3.1415926535;
let r = +prompt("donner le rayon d el'esphere:");
let V;

V = (4/3) * pi * r**3;

console.log("le volume est :" + V);