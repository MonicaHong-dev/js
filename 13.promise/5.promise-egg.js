function fetchEgg(chicken) {
  return new Promise(`${chicken}=> 🥚 `);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg}=> 🍳 `);
}
function getChicken() {
  //   return Promise.reject(new Error('cannot get chicken'));
  return Promise.resolve(`🌿 => 🐔 `);
}

getChicken()
  .catch(() => '🐥')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

/**
 * promise는 함수를 수행하고 난 뒤의 상태값을 전달한다.
 * Proxy for a vlaue not necessarily known when the promise is created.
 * 왜? 함수가 실행되고 나온 결과값을 받은 다음에 다음 함수를 실행해야 하기 때문
 * callback은 왜 별로인가? 실행순서 컨트롤이 안됨
 *
 *
 */
