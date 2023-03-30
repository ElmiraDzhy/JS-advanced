'use strict';

//двойные циклы - tasks


function drowtriangle(){
  let str = '';
  for(let i = 0; i < 8; i++){
    
    for(let j = 0; j <= i; j++){
     str+='*';
    }
  
    str += '\n';
  
  }
  
  console.log(str);
}

function emptySquare(dimention){
  let str2 = '';
  for(let i = 0; i < dimention; i++){
    
    for(let j = 0; j < dimention; j++){
      if(i === 0 || i === dimention-1 || j === 0 || j === dimention-1) {
        str2 += '*';
      }else{
        str2 += ' ';
  
      }
    }
  
    str2 += '\n';
  
  }
  console.log(str2);
}

function diagonalSquare(dimention){
  let str2 = '';
  for(let i = 0; i < dimention; i++){
    
    for(let j = 0; j < dimention; j++){
      if(i === 0 || i === dimention-1 || j === 0 || j === dimention-1 || i === dimention-j) {
        str2 += '*';
      }
      else{
        str2 += ' ';
      }
    }
  
    str2 += '\n';
  
  }
  console.log(str2);
}



emptySquare(10);
drowtriangle();
diagonalSquare(10);