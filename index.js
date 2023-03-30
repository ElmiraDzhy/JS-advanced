'use strict';

//RECURSION


function fibonachi(n){

  return n === 1 || n === 2 ? n : fibonachi(n-1) + fibonachi(n -2);
 

}


function consoleFibonachi(n){
  for(let i = 1; i <= n; i++){
    console.log(`${i} ---- ${fibonachi(i)}`);
  }
}

consoleFibonachi(10);

