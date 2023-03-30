'use strict';

//двойные циклы

for(let i = 1; i <= 10; i++){
  console.log('-------------------------');
  for(let j = 1; j<=10; j++){
    console.log(`${i} * ${j} = ${i*j}`);
  }
  console.log('-------------------------');
}


const arr = [];
const subArr = [];
for(let i = 0; i < 10; i++){
  
  for(let j = 0; j < 10; j++){
    subArr[j] = j;
  }

  arr.push(subArr);
}

console.log(arr);

