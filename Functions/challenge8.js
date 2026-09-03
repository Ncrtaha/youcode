function pairimpair(n){
    return n % 2 == 0 ;
}

function aff(x){
    if(pairimpair(x)){
        console.log("pair");
    }else{
        console.log("impair");
    }
}
aff(2);
aff(7);