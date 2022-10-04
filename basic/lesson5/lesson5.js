// https://habr.com/ru/post/148015/
// https://262.ecma-international.org/13.0/#sec-ecmascript-data-types-and-values

// const mouse1 = {
//   producer: 'AliExpress',
//   color: 'blue',
//   alkaline: 2
// }
//
// const mouse2 = {
//   producer: 'Logithech',
//   color: 'black',
//   alkaline: 1
// }
//
// const mouse3 = {
//   producer: 'SpeedLink',
//   color: 'black',
//   alkaline: 1
// }
//
// function generateMouse(color, producer, alkalineCount) {
//   if (!alkalineCount || alkalineCount < 0) {
//     alkalineCount = 1;
//   }
//
//   return {
//     color,
//     producer,
//     alkaline: alkalineCount
//   }
// }
//
// const mouse4 = generateMouse('yellow', 'Ali', -10);
//
// console.log(mouse4);


class User {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.filed = 'For All'; // same value for all users
    // this.test(); // Will start at `new User()`
  }

  sayHello() {
    console.log(`Hello my name is ${this.name}`);
  }

  //// Override not working
  // sayHello(text) {
  //   console.log(text)
  // }

  test() {
    console.log(`${this.name} test`)
  }
}

class Developer extends User {
  constructor(name, age, gender, skills) {
    super(name, age, gender);
    this.skills = skills;
  }

  sayHello() {
    console.log('Иииии привіт. мммм цмм. Я ... цей ... ', this.name);
  }

  coding() {
    console.log(`I know ${this.skills} such skills`)
  }
}

const anna = new User('Anna', 20, 'female');
const dima = new User('Dima', 25, 'male');

dima.sayHello()

const roman = new Developer('Roman', 20, 'male', ['JS']);

roman.sayHello('fhjk')

roman.coding()

//
// console.log(anna);
// console.log(dima);
//
// anna.sayHello()
// dima.sayHello()
//
// dima.test();
//
// anna.age = 36;
//
// console.log(anna);

//
// class User {
//   constructor(name, age, gender) {
//     this._name = name;
//     this._age = age;
//     this._gender = gender;
//     this._password = '12345';
//   }
//
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     this._name = value;
//   }
//
//   // get age() {
//   //   return this._age;
//   // }
//   set age(value) {
//     if (value < this._age) {
//       console.log('You cannot be younger that u r');
//       return;
//     }
//
//     this._age = value;
//   }
//
//   get gender() {
//     return this._gender;
//   }
//   set gender(value) {
//     this._gender = value;
//   }
//
//   login(loginPassword) {
//     if (this._password !== loginPassword) {
//       console.log('Not valid password');
//       return;
//     }
//
//     console.log('Welocme');
//   }
// }
//
// const anna = new User('Anna', 20, 'female');
//
// // console.log(anna.age);
//
// anna.age = 36;
// anna.age = 12;
//
// anna._age = 10;
//
// console.log(anna);
//
// anna.login('12345');


// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
//
//   #checkEngine() {
//     console.log('Checkng engine');
//   }
//
//   #checkBreaks() {
//     console.log('Checkng breaks');
//   }
//
//   start() {
//     this.#checkEngine();
//     this.#checkBreaks();
//
//     console.log('Bzhzhzzhzhzhzhh');
//   }
// }
//
// const myCar = new Car('Fiat', 'red');
//
// myCar.start();


// TODO talk about function constructors and Hamsters )
