// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

//생성자 함수(대문자로 함수이름 쓴다)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; //생략가능
}

const apple = new Fruit('apple', `🍎`);
const orange = new Fruit('orange', `🍊`);

console.log(apple);
console.log(apple.emoji);
console.log(orange);
console.log(orange.emoji);
