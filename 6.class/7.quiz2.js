// 정직원과 파트타임 직원 나타낼 수 있는 클래스 만들자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, dept, hours, payRate) {
    this.name = name;
    this.dept = dept;
    this.hours = hours;
    this.payRate = payRate;
  }
  payCalculate(hours) {
    return this.payRate * this.hours;
  }
}

const emp = new Employee('monica', 'coding', 10);

class FullTime extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, dept, hours) {
    super(name, dept, hours, FullTime.#PAY_RATE);
  }
}

class PartTime extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, dept, hours) {
    super(name, dept, hours, PartTime.#PAY_RATE);
  }
}

const fullTime = new FullTime('monica', 'coding', 40);

console.log(fullTime.payCalculate());

const partTime = new PartTime('dori', 'admin', 20);

console.log(partTime.payCalculate());

// super를 잘활용하자.
// 부모 클래스에서 정의한 constructor와 추가한 프로퍼티 같이 씀.
