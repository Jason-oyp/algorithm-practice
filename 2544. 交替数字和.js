/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let num = -1;
  const result = String(n)
    .split("")
    .reduce((a, b) => {
      num *= -1;
      let temp = a + +b * num;
      return temp;
    }, 0);
  return result;
};
