// Nullish Coalescing Operator
// ES11(ESCMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, '', null, undefined

let num = 0;
console.log(num || '-1'); //||은 falshy 모두 false로 보기 때문에 num이 0이라는 값이 있어도 falshy이다
console.log(num ?? '-1'); // null과 undefined인 경우에만 뒤의 경우 설정(할당)
