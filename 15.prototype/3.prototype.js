// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '진경', emoji: '🐕‍🦺' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  //   인스턴스 레벨의 함수(모든 인스턴스들에 이 함수가? 메모리 낭비=> 프로토타입 함수로 )
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('진경', '🐕‍🦺');
console.log(dog1, dog2);

dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정희 하면(오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다(섀도잉 됨)
dog1.printName = function () {
  console.log('Hello');
};

dog1.printName();

// 정적 레벨
Dog.hello = () => {
  console.log('Hello!!!');
};

Dog.hello(); //인스턴스 레벨로 접근 안됨, 생성자 함수 이름으로 접근해야 함
// dog1.hello(); ==> 인스턴스 레벨 에러남!
Dog.MAX_AGE = 20;

/**
 * 세가지 레벨
 * 1. 인스턴스 레벨(모든 인스턴스가 가지고 있음)
 * 2. 프로토타입 레벨(인스턴스 레벨에서 공통으로 가지고 있음)
 * 3. 생성자 레벨(클래스(생성자)이름에서만 접근 가능함)
 *
 * 프로토타입 레벨을 인스턴스 레벨에서 오버라이딩 할수 있음!
 */
