function add(num1, num2) {
  console.log('function');
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

//example : 재사용성, 유지보수 용이

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '김';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));
