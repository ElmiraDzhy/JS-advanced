'use strict';


// Set

const set = new Set();

set.add('Test');
set.add('Test1');
set.add('Test2');


console.log(set);
console.log(set.has('Test'));
console.log(set.keys());
console.log(...set.entries())

const set2 = new Set([1,2,1,2,3,3,4,3,5,4]);
console.log(set2);


const arr = [2,3,1,2,3,2,1];
const arr2 = [2,1,32,6,7,23,1];

const unicSet = new Set([...arr, ...arr2]);

console.log(unicSet);

