/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
      return true;
    } else {
      set.add(arr[i], arr[i] * 2);
    }
  }
  return false;
};
