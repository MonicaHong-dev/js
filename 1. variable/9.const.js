//let: changed value can be assigned
let a = 1;
a = 2;

// const changed value cannot be assigned
const test = 'hello';
// test = 'hi';
console.log(test);

//1. const should be written in uppper class

const MAX_FRUITS = 5;

// 2. const variable or variable that cannot be assigned
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

// apple = {};

apple.name = 'orange';
apple.display = '🍏';
console.log(apple);
