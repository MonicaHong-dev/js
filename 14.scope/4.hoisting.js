// 함수의 호이스팅은 함수의 선언문 전에 호출을 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();
// func1();
function print() {
  console.log('Hello');
}

//변수(let, const)와 클래스틑 선언만 호이스팅 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
console.log(hi);
let hi = 'hi';

// 표현식으로 함수를 선언하면 접근이 되지 않음
let func1 = function () {};

const cat = new Cat();
class Cat {}

let x = 1;
{
  console.log(x);
  let x = 2;
}