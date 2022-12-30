//카운터 만들기
//0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
//Counter 클래스 만들기

class Counter {
  #value;
  constructor(init) {
    if (isNaN(init) || init < 0) {
      this.#value = 0;
    } else {
      this.#value = init;
    }
  }
  //오직 increment를 통해서만 value값을 변경할 수 잇다. 외부에서 .value접근/할당 안됨!
  increment() {
    this.#value++;
    // return this.value;
  }
  get value() {
    return this.#value;
  }
}

const count = new Counter(0);
count.increment();
count.increment();
count.increment();
count.increment();
console.log(count.value);
