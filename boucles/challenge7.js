var prompt = require('prompt-sync')();


let n = prompt("entrer la serie des nombre : ");
let rvt = 0;
let nfin = 1;
while(n>0){
    nfin = n % 10;
    rvt = (rvt*10)+nfin;
    n = Math.floor(n/10);
}
console.log(rvt);