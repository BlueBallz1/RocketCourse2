// // Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// //     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
//
// // - Данo масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// //     Підказка. Працюйте по принципу задачі вище.
//
// const arr = [1, 2, 3, 4, 5]; // => [1, 2, 3, 'a', 'b', 'c', 4, 5]
// const arr2 = [1, 2, 3, 4, 5]; // => [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
//
// // const five = arr.pop();
// // const four = arr.pop();
// //
// // console.log(arr);
// // arr.push('a', 'b', 'c', four, five);
// //
// // console.log(arr);
// //
// // arr[6] = arr[3]
// // arr[7] = arr[4]
// //
// // console.log(arr);
// //
// // arr[3] = 'a'
// // arr[4] = 'b'
// // arr[5] = 'c'
// //
// // console.log(arr);
//
// // const one = arr2.shift();
// // const five = arr2.pop();
// // arr2.unshift(one, 'a', 'b');
// // arr2.push('c', five, 'e');
// //
// // console.log(arr2);
//

// пустий масив заповнити 50парними/непарними числами,
// робила через for і do while але виводить тільки 25 парних чисел

// const arr = [];
//
// for (let i = 0; arr.length < 50; i = i + 2) {
//   console.log(i);
//
//   arr.push(i)
// }
//
// console.log(arr);

// // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// const randomArr = [2, '222', 'fasle', true, 18, [], 0, Symbol('x'), { name: 'Dasaha' }];
// const otherArr = [];
// const anotherAtt = []
//
// for (const element of randomArr) {
//   if (typeof element === "number") {
//     otherArr.push(element);
//   }
// }
//
// console.log(otherArr);
// for (const element of otherArr) {
//   anotherAtt.push(element * 5);
// }
//
// console.log(anotherAtt)

// Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// const prices = [100, 250, 50, 168, 120, 345, 188];
// let priceSum = 0;
//
// for (const price of prices) {
//   priceSum = priceSum + price;
// }
//
// console.log(priceSum);
//
// console.log(priceSum / prices.length);

// Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

