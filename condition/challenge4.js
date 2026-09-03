var prompt = require('prompt-sync')();


let a = +prompt("entrer le nomre a: ");
let b = +prompt("entrer le nomre b: ");
let c = +prompt("entrer le nomre c: ");
let t;
let x;
let x1;
let x2;
let deltat;
if (a===0){
    console.log("c'est equation de premier degrer");
}else{
    deltat = b**2 -4*a*c;
    if(deltat>0){
        x1= -b -Math.sqrt(deltat);
        x1 = x1/2*a;
        x2=-b+Math.sqrt(deltat);
        x2 = x2/2*a;
        console.log("x1= ",x1);
        console.log("x2= ",x2);
    }else{
    x = -b/2*a;
    }
}

