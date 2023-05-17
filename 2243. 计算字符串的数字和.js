/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  if (s.length <= k) {
    return s;
  }
  let arr = [];
  while (s.length > k) {
    arr.push(s.slice(0, k));
    s = s.slice(k);
  }
  if (s.length) {
    arr.push(s.slice());
  }
  s = arr.map((it) => eval(it.split("").join("+"))).join("");
  return digitSum(s, k);
};
