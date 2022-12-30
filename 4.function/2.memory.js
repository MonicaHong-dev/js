function add(a, b) {
  return a + b;
}

const sum = add;

//변수 sum이 가르키고 있는 것은 함수 add의 주소이다
// 고로, 변수 sum은 함수 add이다.

console.log(sum(1, 2));
console.log(add(1, 2));
