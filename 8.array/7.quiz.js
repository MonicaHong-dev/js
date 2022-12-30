function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));

  //   const copy = array.slice(); //or Array.from(array)
  //   copy.forEach((e, i) => {
  //     if (e === from) {
  //       copy[i] = to;
  //     }
  //   });
  //   return copy;
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
  return array.filter((value) => value === i).length;
  //   return array.reduce((count, value) => {
  //     if (value === i) {
  //       count++;
  //     }
  //     return count;
  //   }, 0);
  //   let count = 0;
  //   array.filter((e) => {
  //     if (e === i) {
  //       count++;
  //     }
  //   });
  //   return count;
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
  //referencing memory address not value
  array1.map((e) => {
    array2.map((j) => {
      if (e === j) {
        return e;
      }
    });
  });
}

function match(input, search) {
  return input.filter((item) => search.includes(item));
  //   const result = [];
  //   for (let i = 0; i < input.length; i++) {
  //     if (search.includes(input[i])) {
  //       result.push(input[i]);
  //     }
  //   }
  //   return result;
}

const arr1 = ['🍌', '🥝', '🍇'];
const arr2 = ['🍌', '🍓', '🍇', '🍓'];

const result3 = match(arr1, arr2);
console.log(result3);

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

function minOverNmber(array, number) {
  let count = 0;
  const min = array.reduce((min, e, i) => {
    if (e > number) {
      min = min + e;
      count++;
    }
    return min;
  });
  return min / count;
}

const result4 = minOverNmber(nums, 5);
console.log(result4);

const res = nums
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(res);
