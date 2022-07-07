/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  nums.sort((a, b) => a - b);
  let start = 0;
  let resource = 0;
  for (let end = 0; end < nums.length; end++) {
    while (nums[end] - nums[start] > 1) {
      start++;
    }
    if (nums[end] - nums[start] === 1) {
      resource = Math.max(resource, end - start + 1);
    }
  }
  return resource;
};


// 这题得反复看，加深理解，加深印象