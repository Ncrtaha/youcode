var prompt = require('prompt-sync')();


let a = +prompt("Enter le nombre a : ");
let b = +prompt("Entrer le nombre b : ");
let x ;

console.log(a , "+" , b, "=",x = a+b );
console.log(a , "-" , b, "=" ,x = a-b);
console.log(a , "*" , b,"=",x = a*b.toFixed(2));
if (b==0){
    console.log(" 0 indivivisible");
}else{
    console.log(a,"+",b,"=",x = a/b.toFixed(2));
}