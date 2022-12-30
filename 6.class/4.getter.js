// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
  }
  //속성의 한 부분을 보여주기 만 함(그러나 그 시점 기준으로!)
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(val) {
    console.log('set', val);
  }
}

const std = new Student('모니카', '홍');
std.firstName = 'ellie';
console.log(std.firstName);
console.log(std.fullName); //그 시점에서 액션해서 가지고 옴
std.fullName = 'monica';

// 정리!
// dot notation하면 'get' 호출
// ' = ' 할당하면 'set' 호출 (할당 하는 밸류가 값으로 전달)
