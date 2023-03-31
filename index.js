'use strict';

//RECURSION


class Friend{
    /**
     * 
     * @param {String} name - Name of friend
     * @param {Number} amountCash 
     * @param {Friend} friend 
     */
    constructor(name, amountCash, friend){
        this.name = name;
        this.amountCash = amountCash;
        this.friend = friend;
    }

    getAllCash(){

        if(this.friend === null){
            return this.amountCash;

        } else if( this.friend instanceof Friend){

            return this.amountCash + this.friend.getAllCash();
        }

        if(this.friend instanceof Array){
            
            return this.friend.reduce((accum,friend) => { 
                return accum += friend.getAllCash() 
            }, this.amountCash);
            
            // for(let i = 0; i < this.friend.length; i++){
            //     this.amountCash += this.friend[i].getAllCash();
            // }
       
        }
        return this.amountCash;

    }



}

const first = new Friend('Test', 110, null);

const second = new Friend('Test2', 153, null);

const third = new Friend('Test3', 100, null);

const fourth = new Friend('Test4', 500, [third, first, second]);

const fifth = new Friend('Test5', 700, fourth);

console.log(fifth.getAllCash());

