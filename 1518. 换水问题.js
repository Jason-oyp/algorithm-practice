/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let result = numBottles;
  function _num(a, b, result) {
    const w = Math.floor(a / b);
    const left = a % b;
    result += w;
    const nu = w + left;
    if (nu >= numExchange) {
      return _num(nu, numExchange, result);
    } else {
      return result;
    }
  }
  if (numBottles >= numExchange) {
    return _num(numBottles, numExchange, result);
  } else {
    return result;
  }
};
