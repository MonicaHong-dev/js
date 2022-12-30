// JSON: JavaScript Object Notation(근데 이게 왜 필요함?)
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP통신을 위한
// 오브젝트 형태의 텍스트 포맷 (문자열, 객체로 바로 보내면 리소스를 많이 먹어서?)
// Stringfy(object): JSON
// parse(JSON):Object

const monica = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializaing : 객체를 문자열로 변환
const json = JSON.stringify(monica);
console.log(monica);
console.log(json); //데이터 상태만 변환!(함수는 노노)

//역직렬화 DEserializing :문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);
