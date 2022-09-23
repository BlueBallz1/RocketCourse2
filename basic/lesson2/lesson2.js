// TODO тернарний
// TODO lexical env
// TODO const vs let
// TODO typeof NaN
// TODO object reference

// const age = 26;
// //
// // if (age > 18) {
// //   console.log('YES');
// // } else {
// //   console.log('NO');
// // }
// //
// //
// // (age > 18) ? console.log('YES') : console.log('NO');
// //
// // console.log({})
// //
// // const isOld = age > 18 ? 'YES' : 'NO';
// // console.log(isOld);
//
// let a = false && '5';
// let b = 1 || 2 || 3;
// let c = 1 && 2 && 3;
//
// console.log(a);
// console.log(b);
// console.log(c);
//
// if (false && 5) {
//   console.log('dsdad')
// }
//
// // true
// // false => 0, '', undefined, null, NaN, false
//
//
// const obj = {
//   job: {
//     place: {
//       address: 'Bandera str.'
//     }
//   }
// }
//
// console.log(obj?.user?.girl?.name);
//
// console.log(obj && obj.user && obj.user.girl && obj.user.girl.name);

let age = 18;
const name = 'Viktro';
//
// {
//   console.log(age);
//   const namik = 'Bird';
//
//   console.log(namik)
// }
//
// console.log(namik);

// age = 'Ten';
// name = 'Anna';
//
// console.log(typeof age);
// console.log(typeof 20);
// console.log(typeof 'HELLO WORLD');
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof []);


// let x = 'HELLO WORLD';
//
// let y = x;
//
// console.log(y);
// console.log(x);
//
//
// y = 'TEST'
//
// console.log(y);
// console.log(x);

let obj = {
  a: 2
}
//
// let objCopy = obj;
//
// objCopy.a = 89
//
// console.log(obj);
// console.log(objCopy);

// let obj = {
//   a: 2
// }
//
// let obj2 = {
//   a: 2
// }
//
// console.log(obj === obj2);

// const arrayExa = [1, 4, false, {}, 'HELLO', 22, []];
//
// // console.log(arrayExa);
// // console.log(obj);
// //
// // console.log(arrayExa[0]);
// // console.log(arrayExa[4]);
// // console.log(arrayExa[9876789]);
// //
// // arrayExa[4] = 'THIS IS FBI';
// // arrayExa[98] = 'ROCKET'
// //
// // delete arrayExa[4];
// //
// // console.log(arrayExa);
//
// arrayExa.push(7);
// arrayExa.push('HELLO WORLD', 90, [], false);
// arrayExa.unshift('Yamaha', 'Honda');
//
// let pop = arrayExa.pop();
// console.log(pop, 'POP');
// arrayExa.pop()
// arrayExa.pop()
//
// let shift = arrayExa.shift();
// console.log(shift, "SHIFT");
// arrayExa.shift()
// arrayExa.shift()
//
// console.log(arrayExa);
//
//
// const arr2 = [];
// arr2[8] = 'TEST';
//
// console.log(arr2);
//
// arr2.shift();
// arr2.shift();
//
// console.log(arr2);

const x = 'name';
console.log(x[0]);

const chat = ['Andrii', 'Chey', 'Diana', 'HP', 'Iron', 'Veronika', 'Zuwwie'];
// const chat = ['Andrii', 'Chey', 'Diana'];


console.time('OPTI');
const chatLen = chat.length;

for (let i = 0; i < chatLen; i = i + 1) {
  console.log('_____________________');
  console.log(i, 'INDEX');

  if (chat[i].length >= 5) {
    console.log(chat[i]);
  }
}
console.timeEnd('OPTI');


console.time('NOT OPTI');
for (let i = 0; i < chat.length; i = i + 1) {
  console.log('_____________________');
  console.log(i, 'INDEX');

  if (chat[i].length >= 5) {
    console.log(chat[i]);
  }
}
console.timeEnd('NOT OPTI');

// TODO read about yagni / kiss /dry
