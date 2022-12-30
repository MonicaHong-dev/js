//Ternary Operator
//condtion ? true : false

let fruit = 'apple';

if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍏');
} else {
  console.log('😘');
}

fruit === 'apple' ? console.log('🍎') : console.log('😘');

//you can use it for assignment

let emoji = fruit === 'apple' ? '🍎' : '😘';
console.log(emoji);
