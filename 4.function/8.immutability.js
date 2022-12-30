//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
//상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값)만들어서 반환해야 함✨
//원시값- 값에 의한 복사
//객체값 - 참조에 의한 복사(메모리 복사)

function display(num) {
  num = 5;
  console.log(num);
}

const val = 4;
display(val);

function displayObj(obj) {
  //   obj.name = 'Moody'; //외부로부터 주어진 인자(오브젝트)를 내부에서 변경❌
  console.log(obj);
}

const monica = { name: 'monica' };
displayObj(monica);

function ChangeName(obj) {
  //이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'James' }; //반환할때는 새로운 오브젝로!
}

console.log(monica);
console.log(ChangeName(monica));
