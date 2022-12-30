// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍊', '🍇'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// //특정 아이템 찾을때
console.log(fruits.indexOf('🍎'));

// // 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

//추가 - 제일 앞
length = fruits.unshift('🍓'); //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

//제거 - 제일 뒤
let lastItem = fruits.pop(); //새로운 배열을 리턴(제거 된 것)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
let firstItem = fruits.shift(); //새로운 배열을 리턴(제거 된 것)
console.log(fruits);
console.log(firstItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(0, 1); // 삭제된 배열 리턴
console.log(fruits);
console.log('deleted', deleted);

fruits.splice(0, 2, '🍎', '🍓', '🍑');
console.log(fruits);

//잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(-1);
console.log(newArr);

// console.clear();

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [[1, 2, 3], 4, [5, [7, [9], 8], 6]];
console.log(arr);
console.log(arr.flat(3));

arr = arr.flat(3);

//특정한 값으로 배열 채우기
arr.fill(0); //배열자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

//배열 문자열 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);