/**
 *
 * return은 함수 안에서 연산을 수행하고 나온 특정 값을
 * 다른 곳에서 쓸수 있도록 반환해 준다.
 *
 * return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
 */

function add(a, b) {
  a + b;
  return undefined;
}

//함수 안에서 연산을 수행하는 것과 값을 반환하는 것은 별개 이다!!
const result = add(1, 2);
// console.log(result);

//return을 함수 중간에 하게 되면 함수가 종료됨
//사용예: 조건이 맞지(유효하지) 않을 경우 함수 도입부분에서 함수를 일찍이 종료함!

function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}

print(12);
print(-12);
