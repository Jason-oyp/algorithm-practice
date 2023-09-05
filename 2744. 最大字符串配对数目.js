/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let set = new Set(),
    sum = 0;
  for (let i = 0; i < words.length; i++) {
    if (set.has(words[i])) {
      sum++;
    } else {
      set.add(words[i].split("").reverse().join(""));
    }
  }
  return sum;
};
