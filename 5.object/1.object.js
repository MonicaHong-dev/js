//Object literal {key: value}
//new Object()
//Object.create();
//key - 문자, 숫자, 문자열, 심볼
//value - 원시값, 객체(함수)

let apple = {
  name: 'apple',
  'hello-bye': '👋', //dash특수문자를 써야 해서 따옴표로 작성
  0: 1,
  ['hello-bye1']: '👍',
};

//속성, 데이터에 접근하기 위해서는
console.log(apple.name); //마침표 표기법 dot notation
console.log(apple['hello-bye1']); //대괄호 표기법 bracket notation :특수문자 있을때
apple['name'];

//속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

//속성 삭제
delete apple.emoji;
console.log(apple.emoji);
