
function fac(s){
    let r = 1 ;
    for(let i = 1 ; i<=s ;i++){
        r = r*i;
    }
    return r;
}

let s = fac(3);

console.log(s);