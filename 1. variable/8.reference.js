// primitive copy value

let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

//object copy reference
let apple = {
  //0x1234
  name: 'apple',
};

let orange = apple; //0x1234
orange.name = 'orange';
console.log(apple);
console.log(orange);
