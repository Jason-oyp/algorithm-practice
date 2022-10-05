/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words.length; j++) {
      if (words[j].indexOf(words[i]) > -1) {
        count++;
      }
    }
    if (count !== 1) {
      result.push(words[i]);
    }
  }
  return result;
};
