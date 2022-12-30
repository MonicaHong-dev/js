//Unary Operators

//+
//-
//!(부정)

let boolean = true;
console.log(!boolean);
console.log(!!boolean);

//+ 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'string'); //NaN
console.log(+undefined); //NaN

console.log(!!1); //! 부정연산자
//!! 값을 boolean 타입으로 변환함
