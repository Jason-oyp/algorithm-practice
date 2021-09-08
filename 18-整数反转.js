// var reverse = function (x) {
//     const y = x + '';
//     if (y[0] !== '-') {
//         const result = +(y.split('').reverse().join(''))
//         if (result > -(2 ** 31) && result < (2 ** 31 - 1)) {
//             return result;
//         } else {
//             return 0;
//         }
//     } else {
//         const y1 = y.split('')
//         y1.shift();
//         console.log(y1)
//         const result = +y1.reverse().join('')
//         if (result > -(2 ** 31) && result < (2 ** 31 - 1)) {
//             return -result;
//         } else {
//             return 0;
//         }
//     }
// };



var reverse = function (x) {
    let y = parseInt(x.toString().split("").reverse().join(""));
    if (x < 0)
        y = - y;
    return y >= 2147483647 || y <= -2147483648 ? 0 : y;
};

console.log(reverse(2147483647))
console.log(reverse(-123))