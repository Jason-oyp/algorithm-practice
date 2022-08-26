/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = {};
  const end = [];
  for (let i = 0; i < arr1.length; i++) {
    if (map[arr1[i]]) {
      map[arr1[i]]++;
    } else {
      map[arr1[i]] = 1;
    }
    if (!arr2.includes(arr1[i])) {
      end.push(arr1[i]);
    }
  }
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i];
    const count = map[num];
    result.push(...new Array(count).fill(num));
  }
  return result.concat(end.sort((a, b) => a - b));
};
