var prompt = require('prompt-sync')();


let C = +prompt("Saisir la temperature: ");

if (C < 0){
    console.log("L'etat de l'eau est SOLID");
} else if (C >= 100){
    console.log("L'etat de l'eau est GAZ");
}else{
    console.log("L'etat de l'eau est LIQUID");
}