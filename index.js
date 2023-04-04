'use strict';

// Algorithms

const nums = [1,2,3,4,5,4,6,7,6,5,6,54,56,6,3];
//O(n)
const linearSearch = (elem, aar) =>{
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === elem) {
            return i;
        }
    }
    return -1;
}

//O(n^2)

const multyTable = (limit) =>{
    const table = [];
    for(let i = 1; i <= limit; i++){
        for(let j = 1; j <= limit; j++){
            table.push(`${i} * ${j} = ${j*i}`);
        }
    }
    return table;
}

// console.log(multyTable(10));


//Binary search - works only with sorted data

const sortedArr = [1,2,3,4,5,6,7,8];

//O(log(n))
const binarySearch = (elem, arr) =>{
    let start = 0;
    let end = arr.length-1;
    let middle = Math.round((start + end) / 2);

    while(true){
        if(arr[middle] === elem){
            return middle;
        }

        if(arr[middle] > elem){
            end = middle;
            middle = Math.floor((start + end) / 2);
        }

        if(arr[middle] < elem){
            start = middle;
            middle = Math.ceil((start + end) / 2);
        }
    }

   
}

//  console.log(binarySearch(6,sortedArr))