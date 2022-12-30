//매개변수의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본값 Default Parameters a=1, b=1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}
// add();

//Rest 매개변수 Rest Parameters
//기본 매개변수를 지정할 수도 있고, 나머지 parameter를 받을 수도 있다.
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
