/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  words = words.map((it) => it.split(""));
  for (let i = words.length - 1; i > 0; i--) {
    if ([...words[i]].sort().join("") === [...words[i - 1]].sort().join("")) {
      words.splice(i, 1);
    }
  }
  return words.map((it) => it.join(""));
};
