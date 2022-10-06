// const email = 'Viktor.kmin@honda.ca';
// const wrongEmail = '  Viktor.Kmin@honda.ca    ';
//
// // console.log(email.toLowerCase() === wrongEmail.toLowerCase());
// //
// //
// // console.log('    XXyy    IIoo      ');
// // console.log('    XXyy    IIoo      '.toLowerCase().trim());
// //
// // let whiteList = '98;74;91;5';
// //
// // let strings = whiteList.split('');
// // console.log(strings);
// //
// // // let strings2 = [...whiteList];
// // // console.log(strings2);
// //
// // let string = wrongEmail.replace(new RegExp('o', 'g'), 'XXX');
// // let stringAll = wrongEmail.replaceAll('o', 'XXX');
// // console.log(string);
// // console.log(stringAll);
// //
// // let endWith = email.endsWith('.ca');
// // let startsWith = email.toLowerCase().startsWith('vi');
// // console.log(endWith);
// // console.log(startsWith);
//
// let b = wrongEmail.includes('@honda');
// console.log(b);
//
// let s = email.slice(3, 6);
// let s2 = email.substring(3, 6);
// console.log(s);
// console.log(s2);
// console.log(email);
//
// const name = 'VIKTOR';
// const firstLetter = name.substring(0, 1).toUpperCase();
//
// const normalizedName = firstLetter + name.substring(1, name.length).toLowerCase()
//
// console.log(normalizedName);

// const numbers = [1, 8, 12, 96, 3, 73.5, 893, -5, 4];
const names = ['Oleksii', 'User', 'Taras', 'Ruslan', 'Зоя', "Діана", 'Andrii', 'Іра', "Аня"];

// let sortedNumber = numbers.sort((a, b) => {
//   return b - a;
// });
//
// let sortedNames = names.sort((a, b) => {
//   if (a > b) {
//     return -1
//   }
//
//   return 1;
//
//   // let number = b.localeCompare(a);
//   //
//   // console.log(number);
//   //
//   // return number
// });
//
// console.log(sortedNumber);
// console.log(sortedNames);

// names.forEach((value, index, array) => {
//   if (index === 3) {
//     return;
//   }
//
//   console.log(value);
//   console.log(index);
//   console.log(array);
//   console.log('_________________');
// });

// let strings = numbers.filter(value => {
//   if (value > 50) {
//     return true
//   }
// });
//
// console.log(strings);

// let string = names.find(name => {
//   return name.length < 4
// });
// let index = names.findIndex(name => {
//   return name.length < 4
// });
//
// console.log(string)
// console.log(index)

// let strings = names.filter(name => {
//   return name.length >= 5
// });
//
// console.log(strings);

// let some = names.some(name => {
//   return name.length <= 3;
// });
//
// let every = names.every(name => {
//   return name.length <= 3
// })
//
// console.log(some);
// console.log(every);

// let b = names.includes('Зоя');
// console.log(b);

// let s = names.join(' ; ');
// console.log(s);

// let strings = names.splice(2, 0, ...['HP', 'Nazar', 'Olga']);
// console.log(strings);
// console.log(names);

// // MUTATION PRESENT IN:
// numbers.sort();
// numbers.reverse()
// numbers.splice(2, 0, 'MUTATION')
//
// console.log(numbers);

// let strings = names.map((name, index) => {
//   if (index === 3) {
//     return;
//   }
//
//   return {
//     name,
//     id: index + 1
//   }
// });
//
// console.log(strings);
// console.log(names);

// const users = [
//   {
//     "name": "Oleksii",
//     "id": 1
//   },
//   {
//     "name": "User",
//     "id": 2
//   },
//   {
//     "name": "Taras",
//     "id": 3
//   },
//   {
//     "name": "Ruslan",
//     "id": 4
//   },
//   {
//     "name": "Зоя",
//     "id": 5
//   },
//   {
//     "name": "Діана",
//     "id": 6
//   },
//   {
//     "name": "Andrii",
//     "id": 7
//   },
//   {
//     "name": "Іра",
//     "id": 8
//   },
//   {
//     "name": "Аня",
//     "id": 9
//   }
// ];
//
// let map = users.map(user => {
//   user.id = user.id * 5;
//
//   return user.id;
// });
//
// console.log(map);
// console.log(users);

// const numbers = [1, 8, 12, 96, 3, 73.5, 893, -5, 4];
// let number = numbers.reduce((acc, value) => {
//   console.log(acc, 'ACC');
//   console.log(value, 'VALUE');
//   console.log('_________________');
//
//   // return acc + value;
// });
//
// console.log(number, 'NUMBER');

const users = [
  { name: 'Andrii', age: 16 },
  { name: 'Viktor', age: 99 },
  { name: 'Karina', age: 15 },
  { name: 'DImas', age: 20 },
  { name: 'Roman', age: 110 },
  { name: 'Karina Romana', age: 99 },
]

// let ageSum = users.reduce((acc, value) => {
//   console.log(acc, 'ACC')
//   console.log(value, 'VALUE')
//   console.log(acc + value.age)
//   console.log('_______________________')
//
//   return acc + value.age;
// }, 0);

const initialValue = [];

users.reduceRight((acc, value) => {
  if (value.age > 18) {
    value.car = true

    acc.push(value);
  }

  return acc;
}, initialValue);

console.log(initialValue);
