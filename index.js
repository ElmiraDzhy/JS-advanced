'use strict';

import Stack from "./Stack.js";


//(2+2)+[2*(2/4)+3]

//(3+[4)}+() 


/**
 * 
 * @param {String} str - Text wich need to check
 * @param {Array} open - array with open brackets
 * @param {Array} closed  - array with closed brackets
 * @returns {Boolean}
 */

 function checkBracketsIn(str, open = ['(', '[', '{'], closed = [')', ']', '}']){

    const bracketsArray = makeBraketsArrayFrom(str);
    const stack = new Stack(bracketsArray.length);
    
    for(let i = 0; i < bracketsArray.length; i++){
       
        if(open.includes(bracketsArray[i])){
            stack.push(bracketsArray[i]);
        }

        if(closed.includes(bracketsArray[i])){
            if(open.findIndex(j => j === stack.pick()) === closed.findIndex(j => j === bracketsArray[i])){
                stack.pop();
            }

        }
    }

    return stack.isEmpty;

}

/**
 * 
 * @param {*} text 
 * @param {Object} obj 
 * @returns 
 */
function checkBracketsIn_2(text, obj = {
    '(' : ')',

    '{' : '}',

    '[' : ']',

}){
    
    const arrayBrackets = makeBraketsArrayFrom(text);
    const stack = new Stack(arrayBrackets.length);

    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);


    for(let i = 0; i < arrayBrackets.length; i++){
        if(objKeys.includes(arrayBrackets[i])){
            stack.push(arrayBrackets[i]);
           
        }

       if(objValues.includes(arrayBrackets[i])){ 
            if(obj[stack.pick()] === arrayBrackets[i]){
                    stack.pop();
            }
        }
    }

    return stack.isEmpty;
}



function makeBraketsArrayFrom(text){
    if(typeof text === 'string'){
        return text.split('');
    }
    if(text instanceof Array){
        return text.toString().split('');
    }
}

console.group();
console.log(checkBracketsIn('(2+2)+[2*(2/4)+3]'));
console.log(checkBracketsIn('(3+[4)}+() '));
console.log(checkBracketsIn(['(', ')']));
console.log(checkBracketsIn(['(', ')', '{', '}', '{']));
console.groupEnd()

console.group();
console.log(checkBracketsIn_2('(2+2)+[2*(2/4)+3]'));
console.log(checkBracketsIn_2('(3+[4)}+() '));
console.log(checkBracketsIn_2(['(', ')']));
console.log(checkBracketsIn_2(['(', ')', '[','{','}',']']));
console.log(checkBracketsIn_2( ' ({[text]}) ((<Text)) ', {
    '(' : ')',
    '{' : '}',
    '[' : ']',
    '<' : '>',
} ))
console.groupEnd()

