function fetchEgg(chicken) {
  return new Promise(`${chicken}=> π₯ `);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg}=> π³ `);
}
function getChicken() {
  //   return Promise.reject(new Error('cannot get chicken'));
  return Promise.resolve(`πΏ => π `);
}

getChicken()
  .catch(() => 'π₯')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

/**
 * promiseλ ν¨μλ₯Ό μννκ³  λ λ€μ μνκ°μ μ λ¬νλ€.
 * Proxy for a vlaue not necessarily known when the promise is created.
 * μ? ν¨μκ° μ€νλκ³  λμ¨ κ²°κ³Όκ°μ λ°μ λ€μμ λ€μ ν¨μλ₯Ό μ€νν΄μΌ νκΈ° λλ¬Έ
 * callbackμ μ λ³λ‘μΈκ°? μ€νμμ μ»¨νΈλ‘€μ΄ μλ¨
 *
 *
 */
