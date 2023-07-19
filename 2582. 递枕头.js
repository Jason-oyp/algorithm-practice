/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  const n1 = Math.floor(time / (n - 1));
  const n2 = time % (n - 1);
  if (n1 & 1) {
    return n - n2;
  }
  return 1 + n2;
};
