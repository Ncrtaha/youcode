let r = 7 ;
let l ;


for(let i = 1; i<= r ; i++ ){
  l = "";
  for(let j = 1; j <= r - i ; j++){
    l += " ";
  }
  for(let k = 1 ; k <= 2 * i -1; k++){
    l += "*";
  }
  console.log(l);
}