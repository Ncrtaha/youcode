var prompt = require('prompt-sync')();


let n = prompt("Entrer les quatre nombre : ");
let a;
let b;
let c;
let d;

a = n % 10 | 0;
b = (n/10)%10 | 0 ;
c = (n/100)%10 | 0 ;
d = (n/1000) |0 ;



console.log("inverce est : " + a+b+c+d);