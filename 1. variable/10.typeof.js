//typeof: check data type
//값을 타입 문자열로 변환(할당된 값에 따라서 타입이 달라진다!!)
//Dynamic, weakly type language
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; //할당된 값에 따라 타입이 결정됨!(weakly type)
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);
