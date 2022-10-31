/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  const nn = String(n).split("");
  let result = "";
  let count = 0;
  for (let i = nn.length - 1; i >= 0; i--) {
    count += 1;
    if (count === 4) {
      result = nn[i] + "." + result;
      count = 1;
    } else {
      result = nn[i] + result;
    }
  }
  return result;
};
