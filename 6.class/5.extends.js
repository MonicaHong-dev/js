// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('Eat!');
//   }
//   sleep() {
//     console.log('Sleep!');
//   }
// }
// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('Eat!');
//   }
//   sleep() {
//     console.log('Sleep!');
//   }
//   play() {
//     console.log('Play!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('Eat!');
  }
  sleep() {
    console.log('Sleep!');
  }
}

class Tiger extends Animal {
  constructor(color, ownerName) {
    //super는 부모생성자
    super(color);
    this.ownerName = ownerName;
  }
}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    //super는 부모생성자
    super(color);
    this.ownerName = ownerName;
  }
  eat() {
    super.eat();
    console.log('Doggy is eating!');
  }
  play() {
    console.log('Play!');
  }
}

const dog = new Dog('white', 'monica');
console.log(dog);
dog.eat();
dog.sleep();
