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

function combineFruits() {
  let result = [];
  getApple().then((apple) => {
    result.push(apple);
    getBanna().then((banana) => {
      result.push(banana);
      console.log(result);
      return result;
    });
  });
}

console.log(combineFruits());

getBanna() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  );
//   .then(console.log);

// //   Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
// Promise.all([getBanna(), getApple()]).then((fruits) => console.log('all', fruits));

// // Promise.race 주어진 Promise 중에 제일빨리 수행된것이 이김!
// Promise.race([getBanna(), getApple()]).then((fruit) => console.log('race', fruit));

// // Promise에 대한 모든 결과를 받아보고 싶다면? allSettled
// Promise.allSettled([getBanna(), getApple(), getOrrange()]).then((fruits) =>
//   console.log('all-settle', fruits)
// );
// //   .catch(console.log);
