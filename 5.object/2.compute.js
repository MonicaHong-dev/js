const obj = {
  name: '모니카',
  age: 20,
};

//코딩하는 시점에, 정적으로 접근이 확장됨
obj.name;
obj.age;

function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'work', 'DMC');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, 'work');
console.log(obj);
