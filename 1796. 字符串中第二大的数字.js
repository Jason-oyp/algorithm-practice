/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let arr = [];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const p of s) {
    if (nums.includes(+p)) {
      arr.push(+p);
    }
  }
  arr = [...new Set(arr)];
  arr.sort((a, b) => b - a);
  return arr[1] === undefined ? -1 : arr[1];
};
