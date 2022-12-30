// why dont use js object? it has a lot of fn...its heavy

console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num =2 ; console.log(num)');
console.log(isFinite(1));

// 문자열을 숫자로 변환
console.log(parseFloat('12.24'));
// 문자열 안의 숫자를 정수로 변환
console.log(parseInt('12.24'));
console.log(parseInt('11'));
// URL (URI 하위개념)
// 아스키 문자로만 구성해야 함
// 한글이나 특수문자는 이스케이프 처리 해야 함

const URL = 'https://드림코딩.come';
const encoded = encodeURI(URL);

console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것(https가 없는 것) Compoenet 이용
const part = '드림코딩.come';
console.log(encodeURIComponent(part));
