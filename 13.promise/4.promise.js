function runInDelay(seconds) {
  // promise는 두가지 인자를 받아서 처리하는 콜백함수를 수행(then 호출, catch 호출)
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0 보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));

//   try{
//       runInDelay(() => console.log('callback!'), 5);
//   }catch(error){}

/**
 * 약속을 리턴
 * 어느 시점에 타임아웃이 완료가 되면, 성공인지, 실패인지 알려줄게
 */
