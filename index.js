'use strict';

// DATE  - Standard built-in object


function getMyBirth(){
    const userBirth = new Date(prompt('year-month-day'));
    const thisYearBirth = new Date(new Date().getFullYear(), userBirth.getMonth(), userBirth.getDate())
    const msInDay = 24*60*60*1000;
    return Math.floor((thisYearBirth.getTime() - Date.now()) / msInDay) ;

}

console.log(getMyBirth());