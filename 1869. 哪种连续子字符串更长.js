/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const a = Math.max(
    ...s
      .split(/0+/)
      .filter((it) => it)
      .map((it) => it.length)
  );
  const b = Math.max(
    ...s
      .split(/1+/)
      .filter((it) => it)
      .map((it) => it.length)
  );
  return a > b;
};
