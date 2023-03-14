/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let arr = new Array(26).fill(0);
  for (const p of s) {
    arr[p.charCodeAt() - 97]++;
  }
  arr = arr.filter((it) => it).sort((a, b) => a - b);
  if (arr[0] === arr[arr.length - 1]) {
    return true;
  }
  return false;
};
