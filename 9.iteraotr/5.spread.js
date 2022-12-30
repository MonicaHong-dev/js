// Spread 연산자, 전개구문
// 모든 Iterable은 Spread될수 있다
// 순회가 가능한 모든 것들은 촤로르륵 펼쳐 질 수 있따
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['🍎', '🥝'];
const fruits2 = ['🍓', '🍌'];

let arr = fruits1.concat(fruits2);
console.log(arr);

console.log([...fruits1, ...fruits2]);

// Object
const monica = { name: 'Monica', age: 20, home: { address: 'seoul' } };
const updated = {
  ...monica,
  job: 's/w engineer',
};

//obj안에 있는 obj를 가지고 오면 shallow 카피이다.(Spread해도)
monica.home.address = 'busan';

console.log(monica);
console.log(updated); //새로운 객체이기 때문에 기존의 monica는 변경되지 않음
