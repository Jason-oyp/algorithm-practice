/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  // return arr.flat( n)
  if (n === 0) {
    return arr;
  }
  const result = [];
  for (const item of arr) {
    result.push(...(Array.isArray(item) ? flat(item, n - 1) : [item]));
  }
  return result;
};
