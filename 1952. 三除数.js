/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  if (n === 1 || n === 2) {
    return false;
  }
  const num = Math.floor(n / 2);
  const set = new Set();
  for (let i = 1; i <= num; i++) {
    if (n % i === 0) {
      set.add(i);
      set.add(n / i);
    }
    if (set.size > 3) return false;
  }
  return set.size === 3;
};
