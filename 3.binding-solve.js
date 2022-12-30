function Cat(name) {
  this.name = name;
  // 2.arrow 함수를 사용: arrow함수는 렉시컬 환경에서의 this를 기억해요!
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이 이름 출력한다옹: ${this.name}`);
  };
  // 1.bind함수를 이용해서 수동적으로 바인딩 해주기
  //   this.printName = this.printName.bind(this);
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

/**
 * 그냥 function은 동적으로 this가 할당되지만,
 * arrow함수는 렉시컬 환경에서 this를 기억함
 * 화살표 밖 제일 근접한 this를 가리킴(그래서 수동에 가까움?)
 */
