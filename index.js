'use strict';


/**
 * 
 * @param {String} str1 
 * @param {String} str2 
 * @returns {Boolean}
 */

function isAnnogram(str1, str2){

     const map = createVocabulary(str1.toLowerCase().split(''));
    const map2 = createVocabulary(str2.toLowerCase().split(''));

    if(map.size !== map2.size){
        return false;
    }


    for (const key of map.keys()) {
        if(map.get(key) != map2.get(key)){
            return false;
        }
    }

    return true;

}
    
function createVocabulary(str){

    const map = new Map();
   
let counter = 0;
    for(let i = 0; i < str.length; i++){

        if(map.has(str[i])){

            counter = map.get(str[i]);
            map.set(str[i], counter+1);
        } else{

            map.set(str[i], 1);
        }
       
    }
    return map;
}




console.log(isAnnogram('amma', 'mama'));
console.log(isAnnogram('amama', 'mama'));
console.log(isAnnogram('apma', 'mama'));
console.log(isAnnogram('hello', 'olleh'));
