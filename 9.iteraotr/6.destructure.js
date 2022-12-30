// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;

console.log(fruits[0]);
// 배열안에서 조금 더 의미 있는 이름을 전달해 줄 수 있다.(인덱스 접근이 아닌)
console.log(first);
console.log(others);

const point = [1, 2, 8];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}

const array = createEmoji();
console.log(array);

const [name, emoji] = createEmoji();
console.log(name);
console.log(emoji);

const monica = {
  name: 'monica',
  age: 20,
  job: 'programmer',
};

// obj를 받아오는 것이 아니라, key를 바로 받아온다
// 할당하는 key값의 이름을 바꿀 수도 있다
// 존재하지 않는 key의 default밸류 값을 설정할 수 있다.
function display({ name, age, job: occupation, pet = '강아지' }) {
  console.log('name', name);
  console.log('age', age);
  console.log('job', occupation);
  console.log('pet', pet);
}

display(monica);

// Quiz

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ name, styles: { size, color } }) {
  console.log(size);
  console.log(color);
}

changeColor(prop);
