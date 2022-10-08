/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const ss = s.split("");
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < ss.length - 1; i++) {
    const left = ss.slice(0, i + 1);
    const right = ss.slice(i + 1, ss.length);
    max = Math.max(
      max,
      left.filter((it) => it === "0").length +
        right.filter((it) => it === "1").length
    );
  }
  return max;
};
