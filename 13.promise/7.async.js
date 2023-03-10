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

async function fetchFruits() {
  const banana = await getBanna();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));

/**
 * ๋น๋๊ธฐ๋ฅผ ๋๊ธฐ ์ฒ๋ผ ์ฌ์ฉํ๊ณ  ์ถ์ผ๋ฉด async - await ์จ๋ผ
 * function ์์ async๋ถ์ด๋ฉด Promise ๊ฐ์ฒด ๋ฆฌํด(๋น๋๊ธฐ)
 * await์ ๋น๋๊ธฐ๋ก ๊ฐ์ ๊ฐ์ ธ์ด(๊ฐ์ ์ฐ๋ ค๋ ๊ฑฐ๋๊น)
 * const ์ ๋น๋๊ธฐ๋ก ๊ฐ์ ธ์จ ๊ฐ์ ๋ฃ์ด์ฃผ๊ณ  ๋๊ธฐ ์ฒ๋ผ ์(๋๊ธฐ)
 * ์์ ์ปจํธ๋กค ํ๋ฉด์ ๋๊ธฐ์ฒ๋ผ ์ฐ๊ณ  ์ถ์ด์!
 */
