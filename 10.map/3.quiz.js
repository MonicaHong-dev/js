// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// function으로 만들기
function findCommon(set1, set2) {
  let result = [];
  set1.forEach((i) => {
    set2.has(i) ? result.push(i) : null;
  });
  return result;
}
console.log(findCommon(set1, set2));

function findIntersection(set1, set2) {
  //[...set1]또는 Array.from(set1) 사용 가능!
  const array = [...set1].filter((i) => set2.has(i));
  return new Set(array);
}

console.log(findIntersection(set1, set2));
