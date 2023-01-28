/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const set = new Set();
  for (const p of s) {
    if (set.has(p)) {
      set.delete(p);
    } else {
      set.add(p);
    }
  }
  return set.size === 1 || set.size === 0;
};
