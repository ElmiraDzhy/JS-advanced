'use strict';

// DATE  - Standard built-in object

const date = new Date();
console.group();
console.log(`date - ${date}`)
console.log(`date.getDay() - ${date.getDay()}`);
console.log(`date.getDate() - ${date.getDate()}`);
console.log(`date.getMinutes() - ${date.getMinutes()}`);
console.log(`date.getFullYear() - ${date.getFullYear()}`);
console.log(`new Date('2020-02-02') - ${new Date('2020-02-02')}`);
console.log(`new Date('2023-06') - ${new Date('2023-06')}`);
console.groupEnd();
console.log(`------------------------------------------------------`);

const date2 = new Date().setHours(15);
console.log(`date2 - ${date2}`);


function getTime(){
    return `${new Date().getHours()}*${new Date().getMinutes()}`;
}

console.log(`getTime() - ${getTime()}`);

function formatDate(){
    const dayWeek = ['Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${dayWeek[new Date().getDay()-1]}, ${new Date().getDate()} ${monthNames[new Date().getMonth()]} --- ${new Date().getHours()}:${new Date().getMinutes()}`;
}

console.log(`formatDate() - ${formatDate()}`);

class Student{
    constructor(name, surname, year){
        this.name =name;
        this.surname = surname;
        this.year = year;
    }

    getFullName = () => `${this.name} ${this.surname}`;

    getCourse(){
        const date = new Date().getFullYear();
        return date-this.year === 5 ? 'GRADUATE YEAR' : (date-this.year > 5 ? 'Is not a student any more' : date - this.year);
    }
}

const student = new Student('Test', 'Testovich', 2017);
console.log(student.getCourse());
console.log(student.getFullName());
