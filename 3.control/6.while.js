//while(조건) {}
//조건이 false가 될때까지 {} 코드를 반복 실행
//비교: for(변수선언문; 조건식; 증감식)
//외부에서 변수 초기화, 증감 해주어야 함

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('still alive!');
  if (i === 2) {
    console.log('stop!');
    // continue;  //뒤의 코드는 완전 무시, 그러므로 계속 i=2로 고정
    break;
  }
  i++;
}

//do{} while()문
//처음 do를 무조건 실행하고 그 다음에 while문 검사 후 실행
//처음 한번은 무조건 실행해야 한다면 do while 쓰세요!

do {
  console.log('do-while still alive!');
} while (isActive);
