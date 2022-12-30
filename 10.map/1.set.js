// Set
const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size);
console.log(set.has(2));

// 순회(iterable)
set.forEach((item) => console.log(item));

for (const value of set.values()) {
  console.log(value);
}

// 추가(array는 중복 인자 추가 가능, set은 암됨)
set.add(6);
console.log(set);
set.add(6);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 3 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10; //obj1는 ref, shallow copy
objs.add(obj1); // 똑같은거라 추가 안됨
console.log(objs);

// 퀴즈
const obj3 = { name: '🍌', price: 3 }; //ref가 다르기 때문에 deep copy
objs.add(obj3);
console.log(objs);
obj3.price = 10;
console.log(objs);
