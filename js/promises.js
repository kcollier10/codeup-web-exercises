// function successIfEvenUTCSecond() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             const second = new Date().getUTCSeconds();
//             if (second % 2 === 0) {
//                 resolve(second);
//             } else {
//                 reject(second);
//             }
//         }, 2000);
//     });
// }
//
// const aPromise = successIfEvenUTCSecond();
//
// aPromise.then((data) => {
//     console.log(`${data} is an even number!`);
// });
// aPromise.catch((error) => {
//     console.log(`${error} is an odd number!`);
// })

const wait = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
);

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
