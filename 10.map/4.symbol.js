// Symbol 심벌
// 유일한 키를 생성할 수 있음

const map = new Map();
// const key1 = 'key';
// const key2 = 'key';

// Symbol 쓰면 이름은 같지만 서로 다른 값이 생성된다
const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, 'hello');
console.log(map.get(key2));
console.log(key1 === key2);

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리(Global Symbol Registry)

const k1 = Symbol.for('key');
const k2 = Symbol.for('key');

console.log(k1 === k2);

console.log(Symbol.keyFor(k2));
console.log(Symbol.keyFor(key1));

// 객체의 키는 단순 문자열이 아닌 경우 항상 대괄호를 사용해야 함
const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);
