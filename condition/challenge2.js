var prompt = require('prompt-sync')();


let x = prompt("Entre le caracter: ")


switch(x){
    case"a":
    case"e":
    case"u":
    case"i":
    case"o":
    console.log("la lettre " ,x,"est une voielle");
    break
    default:
    console.log("la lettre",x,"n'est pas une voielle");
}
