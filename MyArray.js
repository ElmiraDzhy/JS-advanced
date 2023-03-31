'use strict'


class MyArray{
    constructor(){
      this.length = 0;
  
      for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
        this.length++;
    
      }
    }
   
  
    push = function(value){
      this[this.length] = value;
      this.length++;
    }
  
    pop = function(value) {
      let result = this[this.length-1];
      delete this[this.length-1];
      this.length--;
      return result;
    }
  
    forEach = function(callback){
        for(let i = 0; i < this.length; i++){
          callback(this[i]);
  
        }
    }
  
    filter = function(callback){
      const newarr = new MyArray();
      for(let i = 0; i < this.length; i++){
        callback(this[i]) ? newarr.push(this[i]) : false;
  
      }
      return newarr;
    }
  
    reverse = function(){
      for (let i = this.length-1; i > 0; i--) {
        let last = this[i];
        let first = this[(this.length-1) - i];
        this[(this.length-1) - i] = last;
        this[i] = first;
      }
    }
  
    reduce (fn, initialValue){
      let accumulator = initialValue;
      for(let i = 0; i < this.length; i++){
        accumulator = fn(accumulator, this[i], i);
      }
  
      return accumulator;
    }


    concat(arr){
      for(let i  = 0; i < this.length; i++){
        newArr.push(this[i]);
}

        for(let i  = 0; i < arr.length; i++){
                newArr.push(arr[i]);
        }

        return newArr;
    }


    flat() {
    let newArr = new MyArray();

    for(let i = 0; i < this.length; i++) {
      if(this[i] instanceof MyArray) {

        let item = this[i].flat();
        newArr.concat(item);

      } else {
        newArr.push(this[i])
      }
    }
    return newArr
  }

}


const arr = new MyArray(1,2,3,4,new MyArray(1,2,3,new MyArray(1,new MyArray(12,33,3,6,4),2,3)), new MyArray(1,2,3,4), 1,2,3);

console.log(arr.flat());