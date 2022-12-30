// Bubbling up, Propagating(전파)
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니까 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    throw Error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}

console.log('done');

/**
 * 상위에서 에러를 처리할지, 가까운 곳에서 에러를 처리할지 생각!
 * 에러 잡은 곳에서 다시 상위로 에러를 던져 줘도 됨!(거기서 에러 처리가 다 안될경우)
 */
