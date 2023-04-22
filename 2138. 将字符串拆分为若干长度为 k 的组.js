/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const arr = [];
  for (let i = 0; i < s.length; i += k) {
    arr.push(s.slice(i, i + k));
  }
  if (arr[arr.length - 1].length < k) {
    const x = k - arr[arr.length - 1].length;
    arr[arr.length - 1] = arr[arr.length - 1] + fill.repeat(x);
  }
  return arr;
};
