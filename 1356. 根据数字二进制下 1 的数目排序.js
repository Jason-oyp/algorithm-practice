/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const countBits = (n) => {
    let count = 0;
    while (n) {
      count += n & 1;
      n = n >> 1;
    }
    return count;
  };
  return arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
};
