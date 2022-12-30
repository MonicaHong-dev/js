const fruits = ['🍌', '🍓', '🍇', '🍓'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//배열을 빙글 빙글 돌면서 원하는 것을 할때(요소 마다 한번씩!)
fruits.forEach((value, index, array) => {
  console.log('--------------------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 4 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => value.name === '🍪');
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🍪');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((value) => value.name === '🍪');
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
found = products.every((value) => value.name === '🍪');
console.log(found);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
found = products.filter((value) => value.name === '🍪');
console.log(found);

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할수 있는, 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

// Flatmap: 중첩된 배열을 쫙 펴줌
result = nums.flatMap((item) => [1, 2]);
console.log('Flatmap', result);

result = ['dream', 'coding'].flatMap((w) => w.split(''));
console.log(result);

// sort배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열 변경

const text = ['hello', 'abandon'];
result = text.sort();
console.log(result);

const numbers = [13, 2, 3, 5, 10];
result = numbers.sort();
console.log(result);

result = numbers.sort((a, b) => b - a);
console.log(result);

// reduce 배열의 요소들을 접어서 값을 하나로
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);

console.log(result);
