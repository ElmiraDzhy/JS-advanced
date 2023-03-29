'use strict';

/*

Мы знаем, что функция может получить доступ к переменным из внешнего окружения, 
эта возможность используется очень часто.

Но что произойдёт, когда внешние переменные изменятся? 
Функция получит последнее значение или то, которое существовало на момент создания функции?

И что произойдёт, когда функция переместится в другое место в коде и будет вызвана оттуда – 
получит ли она доступ к внешним переменным своего нового местоположения?

*/

//ЗАМЫКАНИЕ - CLOSURE


let userName = 'Karl';

function sayHi(name){
    return `${name} say hi!`;
}

const sayHiArrow = name => `${name} say hi!`;

const sayHiExpr = function(name){
    return `${name} say hi!`;

}

userName = 'Bob';

console.log(sayHi(userName)); // Bob say hi!
console.log(sayHiArrow(userName)); // Bob say hi!
console.log(sayHiExpr(userName)); // Bob say hi!

//--------------------------------------------------

/**
 * Bложенная функция может быть возвращена: либо в качестве свойства нового объекта 
 * (если внешняя функция создаёт объект с методами), либо сама по себе. 
 * И затем может быть использована в любом месте. Не важно где, она всё так же будет иметь доступ к тем же внешним переменным.
 */

function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // Pete

  makeWorker()(); //Pete 


  /**
   * В JavaScript у каждой выполняемой функции, блока кода и скрипта есть связанный с ними внутренний (скрытый) объект, 
   * называемый лексическим окружением LexicalEnvironment.
   */

  console.log(makeWorker())



  /** 
   * Для каждого вызова makeCounter() создаётся новое лексическое окружение функции, 
   * со своим собственным count. Так что получившиеся функции counter – независимы.
   */

function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
}
  
let counter1 = makeCounter();
let counter2 = makeCounter();

console.log( counter1() ); // 0
console.log( counter1() ); // 1

console.log( counter2() ); // 0 (независимо)