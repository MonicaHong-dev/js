// 오브젝트는 단 하나의 prototype을 가리킬 수 있음(부모는 단 하나!)
// 하지만, 여러개의 함수들을 상속하고 싶다!
// Minxin!

const play = {
  play: function () {
    console.log(`${this.name} 놀아요`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog1 = new Dog('멍멍');
console.log(dog1);
dog1.play();
dog1.sleep();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

// class도 결국 prototype이기 때문에 mixin가능
Object.assign(Tiger.prototype, play, sleep);

const tg = new Tiger('어흥');
tg.play();
tg.sleep();
