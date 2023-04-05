'use strict';

const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}

const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');


console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


console.log(map.keys());
console.log(map.values());
console.log(map.entries());


