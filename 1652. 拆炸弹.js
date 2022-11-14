/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  if (k === 0) {
    return new Array(code.length).fill(0);
  }
  const temp = [...code, ...code];
  if (k > 0) {
    return code.map((it, i) =>
      temp.slice(i + 1, i + k + 1).reduce((prev, next) => prev + next)
    );
  }
  if (k < 0) {
    return code.map((it, i) =>
      temp
        .slice(i + code.length + k, i + code.length)
        .reduce((prev, next) => prev + next)
    );
  }
};
