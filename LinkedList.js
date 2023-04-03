'use strict'

class ListElement{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    get next(){
        return this._next;
    }

    set next (v){
        this._next = v;
    }

    get prev(){
        return this._prev;
    }

    set prev (v){
         this._prev = v;
    }

    get value(){
        return this._value;
    }

    set value (v){
         this._value = v;
    }
}

class List{
    constructor(...args){
        this.length = 0;
        this.head = null;
        this.tail = null;

         args.forEach((elem) => {this.push(elem)});
    }

    push(value){
        // debugger;
        const elem = new ListElement(value);

        if(this.length === 0){
            this.head = elem;
            this.tail = elem;

        } else {
            this.tail.next = elem;
            elem.prev = this.tail;
            this.tail = elem;

        }
     
        return ++this.length;

        
    }

}

const list = new List();
list.push('first');
list.push('second');
list.push('third');
list.push('fourth');
list.push('fifth');
list.push('sixth');
list.push('seventh');


console.log(list);