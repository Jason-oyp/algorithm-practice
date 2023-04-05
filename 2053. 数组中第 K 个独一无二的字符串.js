/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] = 2;
      continue;
    }
    map[arr[i]] = 1;
  }
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) {
      if (j++ === k) {
        return arr[i];
      }
    }
  }
  return "";
};
