function orderTaxi(address, whatToDoWhenArrive) {
  console.log('Ваше замовлення принйято. Авто вже їде', address);
  console.log('Авто пиїхало')

  whatToDoWhenArrive();
}

// orderTaxi('Naukova 12', () => {
//   console.log('Я вже приїхав. Виходить');
// });
//
// orderTaxi('Vol Vel 38', () => {});
//
// orderTaxi('Площа Свободи 22', () => {
//   console.log('Принести сумки з поверху')
// });

//
// function doBavovna(donateToBackAlive, cb) {
//   setTimeout(() => {
//     if (donateToBackAlive >= 20) {
//       console.log('BOOOM');
//
//       cb(null, "Тепер Kрим наш по факту");
//     } else {
//       cb('We need more money', null);
//     }
//   }, 1000)
// }
//
// function goToCrimea(money, cb) {
//   setTimeout(() => {
//     if (money > 400) {
//       console.log('Letumo');
//
//       cb(null, 'Вас вітає Крим. Україна');
//     } else {
//       cb("Нема грошей");
//     }
//   }, 500)
// }
//
// function buySouvenir(money, cb) {
//   setTimeout(() => {
//     if (money > 200) {
//       console.log('Buy rakushka');
//
//       cb(null, "Купили дуже гарну штучку");
//     } else {
//       cb('Занадто дррого');
//     }
//   }, 301)
// }
//
// doBavovna(40, (err, data) => {
//   if (err) {
//     console.error(err);
//     return
//   }
//
//   console.log(data);
//
//   goToCrimea(200, (err, payload) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//
//     console.log(payload);
//
//     buySouvenir(100, (e, msg) => {
//       if (e) {
//         console.error(e);
//         return
//       }
//
//       console.log(msg);
//       console.log('Go home');
//     });
//   });
// });


function doBavovna(donateToBackAlive) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (donateToBackAlive >= 20) {
        console.log('BOOOM');

        resolve("Тепер Kрим наш по факту");
      } else {
        reject('We need more money');
      }
    }, 1000)
  })
}

function goToCrimea(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 400) {
        console.log('Letumo');

        resolve('Вас вітає Крим. Україна');
      } else {
        reject("Нема грошей");
      }
    }, 500)
  })
}

function buySouvenir(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 200) {
        console.log('Buy rakushka');

        resolve("Купили дуже гарну штучку");
      } else {
        reject('Занадто дррого');
      }
    }, 301)
  });
}

// doBavovna(40)
//   .then((result) => {
//     console.log(result);
//
//     return goToCrimea(1000);
//   })
//   .then(crimeaResult => {
//     console.log(crimeaResult);
//
//     return buySouvenir(301);
//   })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(e => {
//     console.error(e);
//   })
//   .finally(() => {
//     console.log('FINALLY')
//   })

// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('P1')
//   }, 3000)
// })
//
// const p2 = new Promise((resolve, rej) => {
//   setTimeout(() => {
//     rej('P2');
//   }, 1099)
// })
//
// const p3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('P3')
//   }, 5663)
// })
//
// // Promise.race([p1, p2, p3])
// //   .then(res => {
// //     console.log(res);
// //   })
// //   .catch(e => {
// //     console.error(e);
// //   })
//
// // Promise.all([p1, p2.catch(()=>{}), p3])
// //   .then(value => {
// //     console.log(value);
// //   })
//
//
// Promise.allSettled([p1, p2, p3])
//   .then(value => {
//     for (const valueElement of value) {
//       console.log(valueElement.status);
//       console.log(valueElement);
//       console.log('______________');
//     }
//   })


async function vacation() {
  try {
    const bavovna = await doBavovna(40);
    console.log(bavovna);

    let newVar = await goToCrimea(100);
    console.log(newVar);

    let newVar1 = await buySouvenir(301);
    console.log(newVar1);
  } catch (e) {
    console.error(e);
  } finally {
    console.log('FINALLY')
  }
}

vacation();

// @victor_fzs
