/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = {};
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  Object.entries(map).forEach((item) => {
    if (+item[0] === item[1]) {
      result = Math.max(result, item[1]);
    }
  });
  return result;
};
