/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const diff = new Array(52).fill(0); // 差分数组
  for (const [l, r] of ranges) {
    diff[l]++;
    diff[r + 1]--;
  }
  // 前缀和
  let curr = 0;
  for (let i = 1; i < 51; i++) {
    curr += diff[i];
    if (left <= i && i <= right && curr <= 0) {
      return false;
    }
  }
  return true;
};
