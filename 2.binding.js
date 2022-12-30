// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
// but, js는 누가 호출하냐에 따라 this가 달라짐!
// 즉, this는 호출하는 객체(caller)에 의해 동적으로 결정됨!

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이 이름 출력한다옹: ${this.name}`);
  };
}
function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강쥐 이름 출력한다웡: ${this.name}`);
  };
}

const cat = new Cat('meow');
const dog = new Dog('bow-wow');

cat.printName();
dog.printName();

cat.printName = dog.printName;

cat.printName();
dog.printName();

function printOnMonitor(printName) {
  console.log('prepare moitor, and excute callback');
  printName(); //caller가 없기 때문에 undefined 임!
}

printOnMonitor(cat.printName);
