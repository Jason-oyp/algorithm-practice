/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  if (arr.length === 1) return arr[0];
  const count = Math.floor(arr.length / 4);
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
      if (map[arr[i]] > count) {
        return arr[i];
      }
    } else {
      map[arr[i]] = 1;
    }
  }
};
