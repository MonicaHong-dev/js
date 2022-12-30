// Iterable하다는건, 순회가 가능하다는 것!
// [Symbol.iterator]():Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 걸 알수 있음
// 순회가 가능하면 무엇을 할수 있나? for...of, spread
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 };
for (const i in obj) {
  //key를 출력
  console.log(i);
}

const iterator = array.values();
// while (true) {
//   const item = iterator.next();
//   if (item.done) break;
//   else console.log(item.value);
// }
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
for (const item of iterator) {
  console.log(item);
}
