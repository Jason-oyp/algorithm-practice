/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
  let res = A ^ B;
  // 研究研究
  if (res < 0) res = res >>> 0;
  return res
    .toString(2)
    .split("")
    .filter((it) => it === "1").length;
};
