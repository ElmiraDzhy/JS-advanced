'use strict';

/**
 * Стек — абстрактный тип данных, представляющий собой список элементов, 
 * организованных по принципу LIFO (англ. last in — first out, 
 * «последним пришёл — первым вышел»).
 */

class Stack {

    constructor(){
        this._size = 0;
        this._storage = {};
    }

    get size(){
        return this._size;
    }

    get storage(){
        return this._storage;
    }

    isEmpty () {
        return this.size === 0;
    }

    push(elem) {
        this._size++;
        this._storage[this.size] = elem;
        return elem;
    }

    pop(){
        if(this.size > 0){
            const lastElem = this._storage[this.size];
            delete this._storage[this.size];
            this._size--;
            return lastElem;
        }
        return 0;
    }
   
    top(){
        return this._storage[this.size];
    }

}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(myStack);
