/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let index = 0;
  for (let item1 of arr1) {
    for (let item2 of arr2) {
      if (Math.abs(item1 - item2) <= d) {
        index++;
        break;
      }
    }
  }
  return arr1.length - index;
};
