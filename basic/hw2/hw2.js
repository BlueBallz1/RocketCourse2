// створити функцію
// яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив
// EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
// результат
//   [3,5,7,9]
//
// const arr1 = [1, 2, 3, 4, 9, 9, 16, 90, 7]
// const arr2 = [2, 3, 4, 5]
//
// // function arrayLesson31(arr1 = [], arr2 = []) {
// //   const resultArr = [];
// //
// //   for (let i = 0; i < arr1.length; i++) {
// //     resultArr[i] = arr1[i] + arr2[i];
// //   }
// //
// //   return resultArr;
// // }
// // function arrayLesson31(arr1 = [], arr2 = []) {
// //   return arr1.map((numb, i) => numb + arr2[i]);
// // }
// // const arrayLesson31 = (arr1 = [], arr2 = []) => arr1.map((numb, i) => numb + arr2[i]);
//
// function arrayLesson31(arr1 = [], arr2 = []) {
//   const resultArr = [];
//
//   const biggestLength = arr1.length > arr2.length ? arr1.length : arr2.length;
//
//   for (let i = 0; i < biggestLength; i++) {
//     resultArr[i] = (arr1[i] || 0) + (arr2[i] || 0);
//   }
//
//   return resultArr;
// }
//
// let arrayLesson = arrayLesson31(arr1, arr2);
//
// console.log(arrayLesson);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// const array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < array.length; i++) {
//   if (array[i+1] % 2 === 0) {
//     console.log(array[i])
//   }
// }

// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//   Оперативна память.
//   Потужність процесора. (цифра від 0 до 1000)
//   Назва.
//   В кожного компютера має бути метод включання.
// ===
//
// Від базового компютрера треба реалізувати ноутбук.
//   Він має нову властивість дюймаж монітора.
//
//   У нього зявляється нова змінна роботи батареї. Ця змінна визначається як
//   потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//   Він має нову змінну ваги.
//   При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
//   В нього має бути новий метод запуску ігор.
//   Кількість FPS визначається як потужність / опервтивку.
//   Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//   Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//   Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//   Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігровий ПК.
//   Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//   При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

// class PC {
//   constructor(ram, power, name) {
//     this.ram = ram;
//     this.power = power;
//     this.name = name;
//   }
//
//   powerOn() {
//     console.log('Bzzzz')
//   }
// }
//
// class Laptop extends PC {
//   constructor(ram, power, name, diagonal) {
//     super(ram, power, name);
//     this.diagonal = diagonal;
//     this.batarey = this.power / (this.diagonal * this.ram)
//     this._ram = ram;
//     this._power = power;
//   }
//
//   get ram() {
//     return this._ram;
//   }
//   set ram(value) {
//     if (value < this._ram) {
//       return;
//     }
//
//     if (value / this._ram > 2) {
//       return;
//     }
//
//     this._ram = value;
//   }
//
//   get power() {
//     return this._power;
//   }
//   set power(value) {
//     if (value / this._power > 0.1) {
//       return;
//     }
//
//     if (value < this._power) {
//       return;
//     }
//
//     this._power = value;
//   }
// }
//
// const dell = new Laptop(32, 900, 'Precision', 15);
//
// console.log(dell);
//
// dell.ram = 38;
//
// console.log(dell);

