// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('Callback입력 해야 함!');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds is less than 0');
  } else {
    setTimeout(callback, seconds * 1000);
  }
}

runInDelay(() => console.log('callback!'), 5);
