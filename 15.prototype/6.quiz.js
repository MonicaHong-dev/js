//프로토타입을 클래스로 변환 하기

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log(`let's play`);
  }
}

class Tiger extends Animal {
  hunt() {
    console.log(`let's hunt!`);
  }
}

const dog1 = new Dog('JK', '🐕‍🦺');
dog1.printName();
dog1.play();

const tg = new Tiger('TG', '🐱‍👤');
tg.printName();
tg.hunt();

// 상속도 확인 하는 법
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
