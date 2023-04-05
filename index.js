'use strict';

// Map - data-structure

const map = new Map();

map.set('str', 'value');
map.set('str2', 'value');
map.set('str3', 'value');
map.set('str4', 'value');
map.set('str5', 'value');
map.set({test: 'value'}, 'value');
map.set(()=>{}, 'value');

console.log(map);
console.log(map.get('str'));
console.log(map.has('str5'));
console.log(map.has('str10'));


function translator(str){

    const vocabulary = new Map();

    vocabulary.set('cat', 'кот');
    vocabulary.set('dog', 'собака');
    vocabulary.set('eat', 'кушать');
    vocabulary.set('food', 'еда');
    vocabulary.set('monkey', 'обезьяна');

    const words = str.toLowerCase().split(' ');

     const translatedText =  words.map((word) => vocabulary.has(word) ? vocabulary.get(word) : word);

     return translatedText.join(' ');


}

console.log(translator('dog eat cat'))


const user1 = {
    firstName : 'John',
    lastName: 'Doe',

}

const user2 = {
    firstName : 'Jane',
    lastName: 'Doe',
    
}

const msgJohn = ['hello', 'how are you'];
const msgJane = ['hello, John!', 'I am fine'];


const userMap = new Map();

userMap.set(user1, msgJohn);
userMap.set(user2, msgJane);

console.log(userMap);


