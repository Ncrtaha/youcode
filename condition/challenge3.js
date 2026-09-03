var prompt = require('prompt-sync')();


let n1 = +prompt("entrer le premier nombre: ");
let n2 = +prompt("entrer le deuxiem nombre: ");

if (n1===n2){
    console.log("s=",(n1+n2)*3)
}else{
    console.log("s=",n1+n2)
}