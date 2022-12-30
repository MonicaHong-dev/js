//static 정적 프로퍼티, 메서드
class Fruit {
  //생성자: new 키워드로 객체를 생성할때 호출되는 함수
  static MAX_FRUIT = 5;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  //클래스 공통사용, 만들어진 인스턴스가 참조할 필요 없는 함수인 경우
  static makeRandomFruit() {
    //클래스 레벨의 메서드에서는 this를 참조할 수 없음(?클래스 자체는 채워지지 않은 템플릿이기 때문)
    return new Fruit('banana', '🍌');
  }
  //인스턴스 레벨의 메서드(만들어진 인스턴스와 밀접함)
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

//인스턴스 레벨의 프로퍼티와 메서드는 꼭 생성된 인스턴스를 통해 접근해야 함

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', `🍎`);
// apple은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', `🍊`);

console.log(apple);
console.log(apple.emoji);
console.log(orange);
console.log(orange.emoji);
apple.display();

//static 붙인 프로퍼티와 메서드는 인스턴스 안에 들어있지 않음 확인!
console.log(Fruit.makeRandomFruit());
console.log(Fruit.MAX_FRUIT);

//TODO: 빌트인 오프젝트에서 배울 내용!
//static을 이용하면 인스턴스를 만들지 않고도 유틸리티 함수 사용가능!
Math.pow();
console.log(Number.isFinite(1 / 0));
