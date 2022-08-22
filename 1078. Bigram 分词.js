/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const words = text.split(" ");
  const list = [];
  for (let i = 2; i < words.length; i++) {
    if (words[i - 2] === first && words[i - 1] === second) {
      list.push(words[i]);
    }
  }
  return list;
};
