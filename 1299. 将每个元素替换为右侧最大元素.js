/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let result = [];
  let max = Number.MIN_SAFE_INTEGER,
    index = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i < index) {
      result.push(max);
      continue;
    }
    max = Math.max(...arr.slice(i + 1, arr.length));
    index = arr.indexOf(max);
    result.push(max);
  }
  result.push(-1);
  return result;
};

// 解法二： 倒序遍历数组，取最大值
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let result = [];
  const len = arr.length;
  result[len - 1] = -1;
  for (let i = len - 2; i >= 0; i--) {
    result[i] = Math.max(result[i + 1], arr[i + 1]);
  }
  return result;
};
