/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  let ans = 0,
    arr = ["a", "e", "i", "o", "u"];
  for (let i = left; i <= right; i++) {
    const s = words[i][0];
    const e = words[i][words[i].length - 1];
    if (arr.includes(s) && arr.includes(e)) {
      ans++;
    }
  }
  return ans;
};
