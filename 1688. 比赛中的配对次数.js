/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  if (n === 1) return 0;
  let count = 0;
  if (n & 1) {
    const c = Math.floor(n / 2);
    count += c;
    return numberOfMatches(c + 1) + count;
  } else {
    count += n / 2;
    return numberOfMatches(n / 2) + count;
  }
};

// 解法二：
var numberOfMatches = function (n) {
  return n - 1;
};
