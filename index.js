'use strict';

// Primitive mothods

const str = 'hello';

console.log(str.charAt(0));

console.log(str.length);

console.log(str.indexOf('o'));

//В JS есть глобальные встроенные обьекты: Boolean, Number, String

console.log(Number('89'));
console.log(String('hello')); // обертка
console.log(new String('hello')); // создание нового обьекта

//механизм обьектов-оберток

//Когда мы работаем с примитивами по значению - это просто примитив, это не обьект
//когда мы вызываем метод или свойство примитива, JS под капотом создает обьект-обертку соответственного типа
//вызывает метод который мы указали, метод отрабатывает , после чего обьект - обертка уничтожается


