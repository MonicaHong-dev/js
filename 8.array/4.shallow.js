//얕은복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign

// 인자로 전달된 obj를 직접 수정하는 것은 좋지않다. 원본을 바꿀수 있다.
const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 2 };
const sushi = { name: '🍣', price: 2 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store2', store2);

pizza.price = 3;
console.log('store1', store1);
console.log('store2', store2);
