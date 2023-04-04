'use strict';

// Algorithms



//Binary search - works only with sorted data

const sortedArr = [1,2,3,4,5,6,7,8];

//O(log(n))
const recursiveBinarySearch = (elem, arr) =>{
    
    const middle = Math.round((arr.length-1) / 2);
    
    if(arr[middle] === elem){
        return middle;
    }else if( arr[middle] > elem){
        return recursiveBinarySearch(elem, arr.slice(0, middle));


    }else if(arr[middle] < elem){
        return recursiveBinarySearch(elem, arr.slice(middle, arr.length));


    }else {
        return -1;
    }
   
}

//  console.log(recursiveBinarySearch(8,sortedArr))


 /**
  * Task 0-100
  */

 function guessNumber(){
    let start = 1;
    let end = 100;
    let middle = Math.round(end / 2);

    while(true){
       if(confirm(`Your number is ${middle}?`)){
            alert(`You number is ${middle}!!!`);
            return middle;
        }else if(confirm(`Your number bigger than ${middle}?`)){
            start = middle;
            middle = Math.floor((start + end) / 2);
        }else if(confirm(`Your number less than ${middle}?`)){
            end = middle;
            middle = Math.ceil((start + end) / 2);
        }else{
            return - 1;
        }
    }


 }

 guessNumber();