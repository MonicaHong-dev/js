const dog = { name: 'happy', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨

const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const de = Object.getOwnPropertyDescriptor(dog, 'emoji');
console.log(de);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  configurable: false,
  enumerable: false,
});

console.log(dog.name);
console.log(Object.values(dog));
console.log(Object.entries(dog));

delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: 'Ellie',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'Shin',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});

// student.fullName = 'Monica Hong';
console.log(student.fullName);
