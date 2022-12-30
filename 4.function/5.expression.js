//함수 선언문 function name(){}
//함수 표현식(값으로 표현 가능) const name = function () {}
//함수도 객체이기 때문에 객체를 다른 변수에 할당 할 수 있음
//!!표현식으로 작성한 함수는 외부에서 접근 불가능. 그래서 함수 이름이 있어도 인식 못함
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

//화살표 함수 const name = ()=>{}
add = (a, b) => a + b;

console.log(add(2, 4));

//TODO: 표현식에서 무명의 함수와, 화살표 함수의 기술적 차이점은 나중에...

//생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

//IIFE(Immediately-Invoked Function Expressions)
//(괄호로 감싼 함수)는 값(=주소)이므로 ()로 호출 하면 바로 실행!
// 보통 프론트엔드 바로 로딩 되었을때 실행해야 하는 함수 있을때 사용
(function run(params) {
  console.log('😘');
})();
