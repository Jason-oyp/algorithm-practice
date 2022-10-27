/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  const count = high - low + 1;
  if (count & 1) {
    if (low & 1) {
      return (count + 1) / 2;
    } else {
      return (count - 1) / 2;
    }
  } else {
    return count / 2;
  }
};
