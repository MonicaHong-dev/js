function getBanna() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 1000);
  });
}
function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 3000);
  });
}

function getOrrange() {
  return Promise.reject(new Error('no orange'));
}

// ๋ฐ๋๋์ ์ ํ์ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ

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

// //   Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ!
// Promise.all([getBanna(), getApple()]).then((fruits) => console.log('all', fruits));

// // Promise.race ์ฃผ์ด์ง Promise ์ค์ ์ ์ผ๋นจ๋ฆฌ ์ํ๋๊ฒ์ด ์ด๊น!
// Promise.race([getBanna(), getApple()]).then((fruit) => console.log('race', fruit));

// // Promise์ ๋ํ ๋ชจ๋  ๊ฒฐ๊ณผ๋ฅผ ๋ฐ์๋ณด๊ณ  ์ถ๋ค๋ฉด? allSettled
// Promise.allSettled([getBanna(), getApple(), getOrrange()]).then((fruits) =>
//   console.log('all-settle', fruits)
// );
// //   .catch(console.log);
