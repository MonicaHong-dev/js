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

const array1 = ['π', 'π', 'π', 'π'];
const result = replace(array1, 'π', 'π₯');
console.log(result);

// ν΄μ¦2:
// λ°°μ΄κ³Ό νΉμ ν μμλ₯Ό μ λ¬λ°μ,
// λ°°μ΄μμ κ·Έ μμκ° λͺκ°λ μλμ§ μΉ΄μ΄νΈ νλ ν¨μ λ§λ€κΈ°
// input: [ 'π', 'π₯', 'π', 'π₯' ], 'π₯'
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

const array2 = ['π', 'π₯', 'π', 'π₯'];
const i = 'π₯';

const result2 = count(array2, i);
console.log(result2);

// ν΄μ¦3: λ°°μ΄1, λ°°μ΄2 λκ°μ λ°°μ΄μ μ λ¬λ°μ,
// λ°°μ΄1 μμ΄νμ€ λ°°μ΄2μ μ‘΄μ¬νλ μμ΄νλ§ λ΄κ³  μλ λ°°μ΄ λ°ν
// input: ['π', 'π₯', 'π'],  ['π', 'π', 'π', 'π']
// output: [ 'π', 'π' ]

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

const arr1 = ['π', 'π₯', 'π'];
const arr2 = ['π', 'π', 'π', 'π'];

const result3 = match(arr1, arr2);
console.log(result3);

// ν΄μ¦ 4
// 5μ΄μ(λ³΄λ€ ν°)μ μ«μλ€μ νκ· 

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
