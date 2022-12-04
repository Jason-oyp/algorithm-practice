/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== String(i % 2)) {
      count++;
    }
  }
  return Math.min(count, s.length - count);
};


// 思路：要么变成0101，要么变成1010，遍历字符串找出要变成其中一种的操作次数，然后另外一种的操作次数就是字符串的长度减去这一种，然后比较两个大小即可