//프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name,emoji) : 자식에서 부모 생성자로 연결
  Animal.call(this, name, emoji);
  this.owner = owner;
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자옹!');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자! ..🐱‍🏍');
};

const dog1 = new Dog('MJ', '🐶', '모니카');
dog1.printName();
dog1.play();

const tiger1 = new Tiger('tigeres', '🐎');
tiger1.printName();
tiger1.hunt();

// 상속도 확인 하는 법
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
