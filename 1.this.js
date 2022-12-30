/**
 * 글로벌 컨텍스트의 this
 * - 브라우져: 윈도우(Window)
 * - 노드: 모듈
 */
'use strict';

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout();
// setTimeout();

console.clear();

/**
 * 함수내부에서 this란 엄격모드에서는 undefined, 느슨모드에선 글로벌 객체
 */

function fun() {
  console.log(this);
}

fun();

/**
 * 생성자 함수 또는 class에서 this란 앞으로 생성될 인스턴스를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat('meow');
const cat2 = new Cat('meow meow');
cat1.printName();
cat2.printName();
