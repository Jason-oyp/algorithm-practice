/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const binary = n.toString(2);
  let length = binary.length;
  let i = 0;
  let num = -1;
  while (i < length) {
    if (num === binary[i]) return false;
    num = binary[i];
    i++;
  }
  return true;
};
