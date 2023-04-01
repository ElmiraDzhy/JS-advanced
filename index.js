'use strict';

/**
    Подобно стекам, очередь — хранит элемент последовательным образом. 
    Существенное отличие от стека – использование FIFO (First in First Out) вместо LIFO.
 */

class Queue {
    constructor(){
        this._front = null;
        this._back = null;
        this._size = 0;
        this._storage = {};
    }

    get size(){
        return this._size;
    }

    get front(){
        return this._front;
    }

    
    isEmpty = () => this.size === 0;
    top = () =>  this.front;


    enqueue(elem){
        this._size++;
        this._storage[this.size] = elem;
        if(this.size === 1){
            this._front = elem;
            return elem;
        }
        this._back = elem;
        return elem;
    }

  
    dequeue(){
        const storageKeys = Object.keys(this._storage); //массив ключей хранилища
        const firstElemKey = storageKeys[0]; //ключ первого эелемента
        const firstElem = this._storage[firstElemKey]; // елемент хранилища, который нужно удалить - сохраняем в переменную 

        delete this._storage[firstElemKey]; //удаляем первый елемент 
        this._size--;

        //меняем индексы
        for (let key in this._storage) {
            let currentElem = this._storage[key];
            this._storage[key-1] = currentElem;
          
        }

        delete this._storage[storageKeys.length]; // удаляем последний дублирующийся елемент
        this._front = this._storage[1];


        return firstElem;
    }



}


const s = new Queue();
s.enqueue('first');
s.enqueue('second');
s.enqueue('third');
s.enqueue('fourth');
s.dequeue();
s.dequeue();

s.enqueue('myelem');
console.log(s);
