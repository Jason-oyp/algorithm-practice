/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    const sub = arr[i] - arr[i - 1];
    if (sub < min) {
      min = sub;
      result.length = 0;
      result.push([arr[i - 1], arr[i]]);
    } else if (sub === min) {
      result.push([arr[i - 1], arr[i]]);
    }
  }
};
