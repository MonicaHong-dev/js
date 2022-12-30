// 옵셔널 체이닝 연산자 Optional Chaining
// ES11(ECMAScript 2020)
// ?.
// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
// const price = item && item.price;
const price = item?.price;
console.log(price);

const obj = { name: '🐎', owner: { name: 'Monica' } };
function printName(obj) {
  const ownerName = obj?.owner?.name; //obj && obj.owner && obj.owner.name;
  console.log(ownerName);
}

printName();
printName(obj);

// obj가 있는지 없는지 확인까지 해줘야 한다 왜?
// obj가 없는 경우 앱이 크러쉬 되기 때문!
// 항상 함수를 동작시킬때 값이 없는 경우까지 생각해서 코딩하자!
