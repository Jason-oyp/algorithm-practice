/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let first = "",
    second = "",
    target = "";
  for (let i = 0; i < firstWord.length; i++) {
    first += firstWord[i].charCodeAt() - 97;
  }
  for (let i = 0; i < secondWord.length; i++) {
    second += secondWord[i].charCodeAt() - 97;
  }
  for (let i = 0; i < targetWord.length; i++) {
    target += targetWord[i].charCodeAt() - 97;
  }
  return Number(target) === Number(first) + Number(second);
};
s;
