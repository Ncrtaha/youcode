var prompt = require('prompt-sync')();


let n=+prompt("entrer le nombre : ")

if(n%2===0){
    console.log("le nombre",n,"est pair")
}else{
    console.log("le nombre",n,"est impair")
}