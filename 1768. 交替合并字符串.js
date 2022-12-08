/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let str = "",
    i = 0;
  while (true) {
    if (word1[i] && word2[i]) {
      str += word1[i] + word2[i];
      i++;
      continue;
    }
    if (!word1[i]) {
      str += word2.slice(i);
      return str;
    }
    if (!word2[i]) {
      str += word1.slice(i);
      return str;
    }
  }
};
