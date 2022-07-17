/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  if (target >= letters[letters.length - 1]) {
    return letters[0];
  }
  for (let i = 0; i < letters.length; i++) {
    if (target < letters[i]) {
      return letters[i];
    }
  }
};
