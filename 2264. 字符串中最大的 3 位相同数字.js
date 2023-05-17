/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const result = num.match(/(\d)\1\1/g);
  if (result) {
    return result.sort((a, b) => b - a)[0];
  }
  return "";
};
