/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => {
      const m = a[a.length - 1];
      const n = b[b.length - 1];
      return m - n;
    })
    .map((it) => it.slice(0, it.length - 1))
    .join(" ");
};
