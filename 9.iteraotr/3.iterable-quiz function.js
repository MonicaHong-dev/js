// [Symbol.iterator](): Iterator{next():{value,done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 10, (n) => n * 2);
for (const num of multiple) {
  console.log(num);
}

function makeRagneIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rageIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }

      return { value: iterationCount, done: true };
    },
  };
  return rageIterator; //iterator를 반환
}

const it = makeRagneIterator(0, 10, 1);

let result = it.next();
while (!result.done) {
  console.log(result.value * 2);
  result = it.next();
}

console.log('Iterated over sequence of size: ', result.value);
