/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  let cache = nums.join(); // 初始数组保存为字符串
  let target = nums.sort((a, b) => a - b).join(); // 排序后保存为字符串

  nums = cache.split(","); // 字符串还原出初始数组
  for (let i = 0; i < nums.length; i++) {
    if (nums.join() == target) {
      // 每次循环都将本次nums转换为字符串，跟排序后字符串对比
      return i;
    }
    let p = nums.pop(); // 最后一项pop出来，然后unshift插入开头成为第一项(数据体量小，这里使用concat)
    nums = Array(p).concat(nums);
  }

  // 如果循环次数达到数组长度，则表明此数组无法通过右移变为递增数组，返回-1
  return -1;
};
