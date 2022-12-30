// 접근제어자 - 캡슐화
// private(#), public(기본), protected(상속된 자식클래스에서만 사용 가능)
class Fruit {
  // 필드는 constructor에서 주어지는 데이터면 생략 가능
  // 인스턴스가 생성될때 초기화 되어야 한다면 constructor바깥에 생성 가능
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', `🍎`);
// apple.#name = '오렌지';
console.log(apple);
