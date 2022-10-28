/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const sArr = s.split("");
  let result = [];
  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = sArr[i];
  }
  return result.join("");
};
