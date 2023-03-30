'use strict';

//RECURSION

function factorial(num){
  return num === 1 ? 1 : num *  factorial(num-=1);
}

console.log(factorial(3));


function func1(){
console.log('1');
func2();
}

function func2(){
  console.log('2');
  func3();
}

function func3(){
  console.log('3');
}

func1();