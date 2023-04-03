'use strict';

// Primitive mothods


const letters= ['a','e', 'i', 'o', 'u', 'y'];

function foo(str){
    return str.split('').filter(letter =>  letters.includes(letter)).length;
}

console.log(foo('uththtyththte'));
