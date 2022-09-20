let name = 'Батя';
let age = 15;
let login = 'Admin';
let hasCar = true;

// let flat = false;
//
// flat = 'YES';
//
// const job = {
//   title: 'Senior',
//   payment: '2$'
// }
//
//
// let user = {
//   name: 'Віктор',
//   age: 20,
//   hasFlat: flat,
// }
//
// let nul = null;
// let und = undefined;
//
// let bInt = BigInt(9499449);
// let symb = Symbol('s');
//
// console.log(user, 'user info');
// console.log(name, age);
// console.log((2 + 2 - 2) * 3 / 5);
// console.log(14 % 3);

// console.log(user.job);
// console.log(user.job.title);

// console.log(user);

// user.age = 33;
// user.phone = 'Samsung';
//
// // console.log(user.girl);
//
// delete user.age;
// delete user.hasFlat;
//
// user.job = job;
//
// console.log(flat);
// console.log(user);

let camelCase = 'camelCase';
let snake_case = 'snake_case';
let isThisUserBlockedPermanently = true;


// if (age > 18) {
//   console.log('WELOCME');
// } else if (login === 'Admin') {
//   console.log('WELOCME');
// } else {
//   let message = 'You are too young';
//   console.log(message);
// }


// if (age > 18) {
//   console.log('WELOCME');
// } else {
//   if (login === 'Admin') {
//     console.log('WELOCME');
//   } else {
//     let message = 'You are too young';
//     console.log(message);
//   }
// }

// || - OR
// && - AND

// let isNameAllowed = name === 'Oleg' || name === 'Anna';
//
// if (age > 18 || login === 'Admin' && isNameAllowed) {
//   console.log('WELOCME');
// } else {
//   let message = 'You are too young';
//   console.log(message);
// }

// NOT WORKING
// if (age > 18) {
//   console.log('WELOCME');
// } else {
//   let message = 'You are too young';
//   console.log(message);
// }
//
// if (login === 'Admin') {
//   console.log('WELOCME')
// }


let one = true;
let two = true;
let three = false;

// if (one | two && three) {
//   console.log('YES')
// } else {
//   console.log('NO')
// }

// || - ONE = true => all = true
// && - ONE = false => all = false

// > < >= <= === !== // != ==

// if (0 === '0') {
//   console.log('TRUE')
// } else {
//   console.log('FALSE')
// }

switch (name) {
  case "Viktor":
    console.log('This is me');
    break;

  case 'Bird':
    console.log('ШО ТИ');
    break;

  case 'Dimon':
    console.log('Дімон, вали їх');
    break;

  case 'Мама':
  case 'Батя':
    console.log("Я поїв");
    break

  default:
    console.log('Unknown name');
}

// TODO тернарний
// TODO lexical env
// TODO object reference
// TODO const vs let
// TODO typeof NaN
