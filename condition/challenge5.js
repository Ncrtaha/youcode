var prompt = require('prompt-sync')();

let A = +prompt("enter le nombre d'anne: ");
let x = prompt("entrer votre choix\n 1-mois \n 2-Jour \n 3-heurs \n 4-second : ");
let Mois = (12)
let J = (365)
let H = (8760)
let Min = (525600)
let S = (31536000)
let R

if(x==="Moi"){
    R = A*Moi
    console.log("le nombre de mois est :",Moi)
}else if(x==="J"){
    R = A*J
    console.log("le nombre de jours est :",J)
}else if(x==="H"){
    R = A*H
    console.log("le nombre de Hours est :",H)
}else if(x==="Min"){
    R = A*H
    console.log("le nombre de Hours est :",Min)
}
else if(x==="S"){
    R = A*H
    console.log("le nombre de Hours est :",S)
}else {
    console.log("Choix invalid")
}
