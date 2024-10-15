// const obj = {
//     name: "Alice",
//     getName: function () {
//       return this.name;
//     },
//   };
//   const obj2 = {
//     name: "Bob",
//   };
//   const getName = obj.getName;
//   // Вопрос 1: Что будет выведено в консоль?
//   console.log(getName()); // undefined
//   // Вопрос 2: Что будет выведено в консоль после вызова метода
//   console.log(getName.call(obj2)) // Bob

// const obj = {
//     name: "Alice",
//     greet() {
//       console.log(`Hello, ${this.name}`);
//     }
//   };
//   const greet = obj.greet;
//   const boundGreet = greet.bind(obj);
//   obj.greet();      // (1) Alice
//   greet();          // (2) Undefined
//   boundGreet();     // (3) Alice
//   const newObj = { name: "Bob" };
//   newObj.greet = obj.greet;
//   newObj.greet();   // (4)Bob

// const user = {
//     name: 'Charlie',
//     getName: function () {
//         return this.name;
//     },
// };

// const admin = {
//     name: 'Admin',
//     getName: user.getName,
// };

// function printName(fn) {
//     console.log(fn());
// }

// printName(user.getName); // (1) undefined
// printName(admin.getName); // (2)undefined

'use strict';
// eslint-disable-next-line no-redeclare
// @ts-ignore
// eslint-disable-next-line no-redeclare, no-unused-vars
let name = 'Global';

const person = {
    name: 'Alice',
    sayName: function () {
        console.log(this.name);
    },
};

const sayName = person.sayName;

setTimeout(person.sayName, 100); // (1)
setTimeout(sayName, 200); // (2)

const anotherPerson = {
    name: 'Bob',
    sayName: person.sayName,
};

setTimeout(anotherPerson.sayName, 300); // (3)
