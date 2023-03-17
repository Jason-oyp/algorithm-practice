/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let flag = false;
  for (let i = 0; i < words.length; i++) {
    if (words.slice(0, i + 1).join("") === s) {
      flag = true;
      break;
    }
  }
  return words.join("").indexOf(s) === 0 && flag;
};
