// // https://dev.to/jpswade/return-early-12o5

// function buyDollars(uahCount = 0) {
//   uahCount = uahCount || 0;
//   console.log(uahCount);
//   const dollars = uahCount / 42.15
//
//   console.log(`You buy ${dollars}$`);
// }
//
// // buyDollars(12000);
// // buyDollars(52000);
// buyDollars(null);
// buyDollars(undefined);
// buyDollars();
// buyDollars('');
// buyDollars(NaN);
// buyDollars(false);
//
// // function iterateArr(array = []) {
// //   // array = array || [];
// //
// //   if (!Array.isArray(array)) {
// //     array = [];
// //   }
// //
// //   for (const arrayElement of array) {
// //     console.log(arrayElement)
// //   }
// // }
// //
// // iterateArr({})
//
// function gotShop(item1, item2, item3) {
//   console.log(item1);
//   console.log(item2);
//   console.log(item3);
// }
//
// gotShop('Xlib', 'Moloko', 'Puvo');
//
// function funcWithManyItems(items = {}) {
//   console.log(items);
// }
//
// const itemToProcess = { item1: 'Xlib', item2: 'Moloko' };
//
// funcWithManyItems(itemToProcess);
//
//
// function buyProducts(item) {
//   console.log(arguments);
//
//   const argsArr = Array.from(arguments);
//
//   console.log(argsArr);
//
//   for (const argument of arguments) {
//     console.log(`I bought ${argument}`)
//   }
// }
//
// buyProducts('Xlib', 'Moloko', 'Mnyasko', 'Pivaxa', 'Chipsu');

// /**
//  * This function is using to buy a car.
//  * @param money - some number
//  * @param type = sedan || vagon || van || suv
//  * @returns {{rest, car: undefined}|{rest: number, car: string}}
//  */
// function buyCar(money, type) {
//   console.log('I try to buy a car with', money);
//   let car = undefined;
//
//   if (money < 5000) {
//     console.log('No money no honey');
//
//     return {
//       rest: money,
//       car
//     };
//   }
//
//   console.log('Congrats');
//   money = money - 5000;
//   car = 'Lacetti';
//   // money -= 5000;
//
//   console.log('I got', money, 'dollars after all manipulations');
//
//   return {
//     rest: money,
//     car
//   };
// }
//
// const rest = buyCar(3000, 'XXX');
//
// console.log(rest.rest, '$ left. I go to drink Опілля');

// declaration('2');
//
// // expression(2);
//
// function declaration(payload) {
//   console.log(payload);
// }
//
//
// // NO THIS
// // NO ARGUMENTS
// // RETURN COULD BE CHANGED
// const expression = (payload) => {
//   // console.log(arguments);
//   // console.log(this);
//   console.log(payload);
// }
//
// expression(22);
//
//
// const buyDollar = uahCount => uahCount / 42.15;
//
// // Will not work
// // function buyDollars = (uah) => uah / 42;
//
// // function buyDollars(uah) { return uah / 42.15 }
//
// const dollars = buyDollar(12000);
//
// console.log(dollars);
//
// const helperExp = () => {
//   console.log('I AM HELPER');
// }
// function helperDec() {
//   console.log('I AM HELPER');
// }

const user = {
  id: 1, //
  name: 'Karina',
  age: 15, //
  phone: 'iPhone', //
  profession: 'Photographer',
  boyfriend: undefined,
  man: {
    name: 'Viktor'
  },
}

const anotherUser = {
  id: 2,
  name: 'Yarik',
  age: 55,
  phone: 'Alcatel',
  profession: 'Vadila'
}

// const name = user.name;
// const profession = user.profession;
//
// const { name: karishaName, profession, ...otherFileds } = user;
// const { name: yarikName } = anotherUser;
//
// console.log(karishaName, profession);
// console.log(otherFileds);

// const { ...userCopy } = user;
// userCopy.age = 99;
// userCopy.man.name = 'Roman';
//
// console.log(user);
// console.log(userCopy);
//
// const { man: { name } } = user;
//
// console.log(name);

const chat = ['User', 'Taras', 'Roman', 'Nazar', 'Stacy'];

const [, , ,asdad, ...otherUsers] = chat;

console.log(asdad);
console.log(otherUsers);
