/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  const array = Object.values(map);
  return [...new Set(array)].length === array.length;
};
