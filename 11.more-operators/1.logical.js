// 논리연산자 Logical Operator
// &&그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = { name: '🐱' };
const obj2 = { name: '🐎', owner: 'Monica' };

// 단축평가와 차이점!
// if 조건문: 모든 논리연산 구문을 불리언 값으로 계산
if (obj1 && obj2) {
  console.log('둘다 true!');
}

// 단축평가 특징:
// 순차적으로 평가하여 멈춤 뒤의 동작 실행 (obj자체가 할당됨!)
let result = obj1 && obj2;
console.log(result);

let result1 = obj1 || obj2; //true 인것이 할당이 된다
console.log(result1);

// 활용예
// 조건이 truthy일때 && 무언가 해야 할 경우
// 조건이 falshy일때 || 무언가 해야 할 경우

console.clear();
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인없어!!');
  }
  animal.owner = '바뀐주인!';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인 있어!!');
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);

// console.log(obj1);
// console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);

console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item; //= { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정 : default parameter와 차이점!!
// default parameter 전달하지 않거나, undefined 인 경우에만 설정
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}

// default parameter작동
print();
print(undefined);

// default parameter 부작동, 바로 null과 0이 출력됨!
// || 경우, 값이 falshy하므로 작동됨
print(null);
print(0);
print('');
