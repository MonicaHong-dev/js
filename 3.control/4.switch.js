//Conditional Statement
//if else if else...else
//in case of fixed scope value

let day = 0; //0:mon, 1:tue...6:sun
let dayName;

// if (day === 0) {
//   dayName = 'Mon';
// } else if (day === 1) {
//   dayName = 'Tue';
// } else if (day === 2) {
//   dayName = 'Wed';
// } else if (day === 3) {
//   dayName = 'Thu';
// } else if (day === 4) {
//   dayName = 'Fri';
// } else if (day === 5) {
//   dayName = 'Sat';
// } else if (day === 6) {
//   dayName = 'Sun';
// }

switch (day) {
  case 0:
    dayName = 'Mon';
    break;
  case 1:
    dayName = 'Tue';
    break;
  case 2:
    dayName = 'Wed';
}

console.log('dayName', dayName);

let condition = 'okay'; //okay, good -> great!, bad -> terrible!
let text;

switch (condition) {
  case 'okay':
  case 'good':
    text = 'great!';
    break;
  case 'bad':
    text = 'terrible!';
    break;
  default:
    console.log('no day match');
}

console.log(text);
