'use strict';

// Primitive mothods

function fun (str){
    return  str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(fun('feref rerfef erfeef efeer'));

const spamWords = ['viagra', 'xxx', 'porn'];

function checkSpam(str){
    return str.split(' ').map(word => {
        for(let i = 0; i < spamWords.length; i++){
            if(word === spamWords[i]){
                return true;
            }
        }
        return false;
        });
}

console.log(checkSpam('viagra referer efvre'));


function truncate(str, num){
    return str.slice(0, num);

}

console.log(truncate('Lorem ipsum dolor sit amet', 12));


function palindrom(str){
    return str === str.split('').reverse().join('');
}

console.log(palindrom('anna'));
console.log(palindrom('mama'));
console.log(palindrom('mamam'));

const letters= ['a','e', 'i', 'o', 'u', 'y'];

function foo(str){
    let counter = 0;
    for(let i = 0; i < str.split('').length; i++){
        for(let j = 0; j < letters.length; j++){
            if(str.split('')[i] === letters[j]){
                counter++;
            }
        }
    }
    return counter;
}

console.log(foo('edubewfbewejkew'));
