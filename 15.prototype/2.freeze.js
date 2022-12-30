// 동결! Object.freeze 추가❌, 삭제❌, 쓰기❌, 속성 재정의❌ 모두 안됨!
// (단, 얕은 꽁ㄲ오 얼림!)

const monica = { name: '모니카' };
const dog = { name: '왕왕', emoji: '🐶', owner: monica };

Object.freeze(dog);
dog.name = 'bowwow';
console.log(dog);
dog.age = 2;
console.log(dog);
delete dog.name;
console.log(dog);

monica.name = 'Monica';
console.log(dog);

// 밀봉! Object.seal 값의 수정 ✅, 추가❌, 삭제 ❌, 속성 재정의❌
const cat = { ...dog };
// Object.assign(cat,dog);
Object.seal(cat);
console.log(cat);
cat.name = '야옹';
console.log(cat);
delete cat.name;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 PreventExtension 추가❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.preventExtensions(tiger));
tiger.name = 'roar!!';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
