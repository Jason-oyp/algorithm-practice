/**
 * @param {number} num
 * @return {boolean}
 */

// 解法一：
var checkPerfectNumber = function (num) {
  if (num <= 0) return false;
  let n = Math.floor(Math.sqrt(num));
  const arr = [];
  while (n > 0) {
    const result = Math.floor(num % n);
    if (result === 0 && n !== 1) arr.push(n, num / n);
    n--;
  }
  if (num !== 1) arr.unshift(1);
  return arr.reduce((prev, next) => prev + next, 0) === num;
};

console.log(checkPerfectNumber(45));

// 解法二：
var checkPerfectNumber = function(num) {
    return num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336;
};