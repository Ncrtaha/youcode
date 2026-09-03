var prompt = require('prompt-sync')();


let x = +prompt("Entrer le nombre :")

if (x<0){
    console.log("le nombre est negatif")
}else if(x>0){
    console.log("le nombre est positif")
}else{
    console.log("le nombre est null")
}