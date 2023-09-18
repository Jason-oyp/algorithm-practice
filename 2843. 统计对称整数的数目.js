/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let ans = 0;
  for (let i = low; i <= high; i++) {
    const temp = String(i);
    const len = temp.length;
    if (len & 1) continue;
    const half = len / 2;
    const left = temp.slice(0, half);
    const right = temp.slice(half);
    if (
      left.split("").reduce((a, b) => a + +b, 0) ===
      right.split("").reduce((a, b) => a + +b, 0)
    ) {
      ans++;
    }
  }
  return ans;
};
