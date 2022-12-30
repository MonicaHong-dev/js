function a() {
  for (let i = 0; i < 1000000000000000000000000000000000; i++) return 1;
}
function b() {
  return a() + 1;
}
function c() {
  return b() + 1;
}

console.log('start!');
const result = c();
console.log(result);

/**
 * 동기적. 무거운 작업은 좋지 않다!
 * js 언어 자체는 동기적(싱글 쓰레드)
 * 런타임환경(호스트): webAPI(setTimeout, fetch), node 는 비동기적(멀티 쓰레드)
 * 자바스크립트 엔진(js 코드)는 callStack에 들어온 코드들만 수행할 수 있음
 */
