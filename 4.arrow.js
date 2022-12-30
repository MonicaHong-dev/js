// js 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용(클래스)
// 하지만, 이걸 위해 불필요한 무거운 프로포타입(많은 데이터를 담고 있는 객체)

const dog = {
  name: 'Dog',
  play: function () {
    // 객체안에 함수를 표현하는 것은 좋지 않음(무거움, 프로토타입까지 같이 생김)
    console.log('논다멍');
  },
};
dog.play();
const obj = new dog.play(); //함수를 생성자 함수로도 사용할 수 있어, 무거웜
// console.log(obj);

// ES6

const cat = {
  name: 'cat',
  play() {
    //객체의 메서드 (오브젝트에 속한 함수)
    console.log('meow');
  },
};

cat.play();
// const obj1 = new cat.play(); //생성자 함수로 사용❌

/**
 * arrow 함수 큭징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능(무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments 객체 ❌
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */

function sum(a, b) {
  console.log('sum', arguments);
}

sum(1, 2);

const add = (a, b) => {
  console.log('add', arguments); //arrow함수 외부의 arguments(여기서 전역)를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log(this); //전역(노드 모듈)에서의 this!
};

printArrow();
cat.printArrow = printArrow; //아무리 다른 객체에서 사용해도 렉시컬 환경에서의 this를 기억함!
cat.printArrow();
