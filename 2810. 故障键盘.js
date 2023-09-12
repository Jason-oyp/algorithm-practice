/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "i") {
      result += s[i];
    } else {
      result = result.split("").reverse().join("");
    }
  }
  return result;
};
