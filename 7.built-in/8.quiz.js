// 1. 문자열의 모든 캐릭터를 하나씩 출력
const dream = '    You can do 1 pull-up b4 Christmas!';
function printDream(string) {
  const trim = string.trim();
  for (let i = 0; i <= trim.length; i++) {
    console.log(trim[i]);
  }
}

printDream(dream);
console.log(dream.trim());

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'name: monica, id:001';
const arrayId = [];

arrayId.push(ids.split(', id:')[1]);
console.log(arrayId);
console.log(ids.slice(-3));

// 3. 1초에 한번씩 시계를(날짜포함) 출력
setInterval(() => {
  const clock = new Date();
  console.log(clock.toLocaleString('ko-KR'));
}, 1000);
