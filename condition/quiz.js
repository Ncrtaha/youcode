var prompt = require('prompt-sync')();


let age = Number(prompt("Enter votre age :"));
let week = prompt("Si tu as au weekend tappez Y sinon Tapez N : ");

if(age<5){
    console.log("Gratuit")
}else if(age>5 && age<25){
    if(week==="Y"){
        console.log("le prix est 5dh");
    }else if(week==="N"){
        console.log("le prix est 10dh");
    }else{
        console.log("choix incorrect");
    }
}else if(age>25 && age<65){
    if(week==="Y"){
        console.log("le prix est 10dh");
    }else if(week==="N"){
        console.log("le prix est 20dh");
    }else{
        console.log("choix incorrect");
    }
}else{
    console.log("prix 30dh");
}