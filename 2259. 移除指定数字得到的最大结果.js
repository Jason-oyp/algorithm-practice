/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let max = "0";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      if (max < number.slice(0, i) + number.slice(i + 1)) {
        max = number.slice(0, i) + number.slice(i + 1);
      }
    }
  }
  return max + "";
};
