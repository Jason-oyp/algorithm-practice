/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  return Math.floor(
    (s.split("").filter((it) => it === letter).length / s.length) * 100
  );
};
