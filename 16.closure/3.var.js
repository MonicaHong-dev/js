function loop() {
  const array = [];
  var i; //var는 block scope가 없고 오직 function scope만 있다.
  // var와 let의 차이점!
  for (i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
