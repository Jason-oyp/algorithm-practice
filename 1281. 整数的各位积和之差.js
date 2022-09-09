/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = (n + "").split("");
  const ji = arr.reduce((prev, next) => prev * next);
  const sum = arr.reduce((prev, next) => +prev + +next);
  return ji - sum;
};
