function getBanna() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}
function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 애플을 같이 가지고 오기

async function fetchFruits() {
  const banana = await getBanna();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));

/**
 * 비동기를 동기 처럼 사용하고 싶으면 async - await 써라
 * function 앞에 async붙이면 Promise 객체 리턴(비동기)
 * await은 비동기로 값을 가져옴(값을 쓰려는 거니까)
 * const 에 비동기로 가져온 값을 넣어주고 동기 처럼 씀(동기)
 * 순서 컨트롤 하면서 동기처럼 쓰고 싶어서!
 */
