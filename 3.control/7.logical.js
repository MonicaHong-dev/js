// 논리연산자 Logical operator
// && 그리고
// || 또는
// !부정(단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용 버전)

let num = 8;
if (num >= 0 || num < 9) {
  console.log('great');
}

if (num != 9) {
  console.log('wow');
}

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.clear();
console.log(!'text');
console.log(!!'text');
