/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const oddArr = [],
    evenArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }
  const result = [];
  for (let i = 0; i < oddArr.length; i++) {
    result.push(evenArr[i]);
    result.push(oddArr[i]);
  }
  return result;
};

// 解法二：
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  // const oddArr = [], evenArr = []
  const result = [];
  let odd = 1;
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result[even] = nums[i];
      even = even + 2;
    } else {
      result[odd] = nums[i];
      odd = odd + 2;
    }
  }
  return result;
};

// 用位运算判断一个整数奇偶的方法， x & 1   === 1   就是基数，x & 1 === 0 就是偶数 （x表示任意整数）
