// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array, from, to) {
  const copy = array.slice(); //or Array.from(array)
  copy.forEach((e) => {
    if (e === from) {
      copy[copy.indexOf(e)] = to;
    }
  });
  return copy;
}

const array1 = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array1, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, i) {
  let count = 0;
  array.forEach((e) => {
    if (e === i) {
      count++;
    }
  });
  return count;
}

const array2 = ['🍌', '🥝', '🍇', '🥝'];
const i = '🥝';

const result2 = count(array2, i);
console.log(result2);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function filterArray(array1, array2) {
  const newArr = []; //referencing memory address not value
  array1.forEach((e) => {
    array2.forEach((j) => {
      if (e === j) {
        newArr.push(e);
      }
    });
  });
  return newArr;
}

function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}

const arr1 = ['🍌', '🥝', '🍇'];
const arr2 = ['🍌', '🍓', '🍇', '🍓'];

const result3 = match(arr1, arr2);
console.log(result3);
