/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  const result = s.split("");
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result.splice(i + count * 2, 1, "%", "2", "0");
      count++;
    }
  }
  return result.join("");
};
