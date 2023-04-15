/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  return num === 0 || num % 10 !== 0;
  const str = String(num).split("").reverse().join("");
  const num1 = Number(str);
  const str1 = String(num1).split("").reverse().join("");
  return num === Number(str1);
};
