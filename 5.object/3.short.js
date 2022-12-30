const x = 0;
const y = 0;
const coordinate = { x, y };
console.log(coordinate);

const newObj = function makeObj(name, age) {
  //   let objName = new Object();
  //   objName = { name, age };
  //   return objName;
  return { name, age };
};

console.log(newObj('monica', 10));
