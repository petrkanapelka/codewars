const foo = { name: 'Всеволод' };
const bar = {};

Object.setPrototypeOf(bar, foo);

console.log(Object.keys(bar), bar.name);
// @ts-ignore
console.log(Number.__proto__)