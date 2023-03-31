'use strict';

// CLOSURE

function makeCounter(){
    let counter = 0;

    return {
        increment (){
            return ++counter;
        },

        decrement (){
            return --counter;
        },
    }

}


const {increment, decrement} = makeCounter();

function createAdder (n){
    return (x) => n+=x;
}

const func = createAdder(5);

console.log(func(10));
console.log(func(20));



