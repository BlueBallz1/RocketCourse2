const chat = ['Andrii', 'Chey', 'Diana', 'HP', 'Iron', 'Veronika', 'Zuwwie'];

// for (const name of chat) {
//   if (name.length >= 5) {
//     continue;
//   }
//
//   console.log(name);
// }

// let i = 0;
//
// while (i < chat.length) {
//   console.log(chat[i]);
//
//   i = i + 1;
// }

// let i = 0;
//
// do {
//   console.log('DO !!!!')
//   i++
// } while (i <= 10)

// let a = 0;
// let b = 0;
//
// let x = a++;
// console.log(a, 'A')
// console.log(x, 'X')
//
// let y = ++b;
// console.log( '__________________')
// console.log(b, 'B')
// console.log(y, 'Y')

// const cat = {
//   color: 'Black',
//   name: 'Chips',
//   age: 2,
//   eat: 'Bread',
//   children: {
//     cat1: 'cat1',
//     cat2: 'cat2',
//     cat3: 'cat3',
//   }
// }

// for (const chatKey in cat) {
//   console.log(chatKey)
// }

// for (const chatKey of cat) {
//   console.log(chatKey)
// }

// const keys = Object.keys(cat);
// const values = Object.values(cat);
// const entries = Object.entries(cat);
//
// console.log(keys);
// console.log(values);
// console.log(entries);

// let catChild = cat;
//
// catChild.age = 0.1
//
// console.log(cat);

// const viktorStats = {
//   commit: 5,
//   pullRequest: 63,
//   codeReviews: 32,
//   issues: 0,
//   userName: `ViktorKmin`,
//   someNulValue: null,
//   thisIsTrue: true,
//   arr: ['Taras', 'Oleksii'],
//   cat: { name: 'Chips' },
//   inf: Infinity, // -> null
//   payment: NaN, // -> null
//   // gigInt: BigInt(10n), // will get an error
//   undef: undefined, // -> ignored
//   symb: Symbol('x'), // -> ignored
//   func: function () {}, // -> ignored
//   // comments will be ignored
// }
//
// const jsonStat = JSON.stringify(viktorStats);
//
// console.log(jsonStat);
//
//
// // ____________
//
// const statitic = JSON.parse(jsonStat);
//
// console.log(statitic);
// // console.log(cat);
// // const catJSON = JSON.stringify(cat);
// // console.log(catJSON);
// //
// // const catParsed = JSON.parse(catJSON);
// //
// // catParsed.age = 0.1
// // console.log(catParsed);
//

// // let name = 'Viktor', age = 26, car = true
// let name = 'Viktor';
// let agt = 26;
//
// console.log('Hello my name is', name, 'and my age is', agt, cat);
// console.log(`Hello my name if ${name} and I am ${agt} years old ${cat}`);
// //
// // console.log('Data to send', cat);
// // console.log(`Data to log ${JSON.stringify(cat)}`);


/// START OF FUNCTIONS BASIC

function printSomething(whatToPrint) {
  console.log('THIS IS FUNCTION', whatToPrint);
}

printSomething('Chatik');
printSomething('Name is Vova');
printSomething('Rus - Hi');
printSomething(22);
printSomething(false);
printSomething({ name: 'Dimon' });
printSomething(['HP', 'Taras']);
