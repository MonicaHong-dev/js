// 내부 정보를 은닉하고, 공개함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

/**
 * 함수로 내가 은닉하고자 하는 변수(내부 데이터)를 감추고,
 * 오로지 퍼블릭 함수만 통해서 내부데이터 조작함
 * 이것은 이제 클래스로 구현함
 */

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
