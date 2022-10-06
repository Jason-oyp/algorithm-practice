/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let startValue = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] < 1) {
      startValue += 1 - (sum + nums[i]);
      sum = 1;
      continue;
    }
    sum = sum + nums[i];
  }
  return startValue === 0 ? 1 : startValue;
};

// 每次让之前相加的和与当前数相加
// 如果小于1，则将startValue的值加等于 1 - （sum + nums[i]），然后将sum重置为1
// 如果 >= 1，则只将sum += nums
// 最后如果startValue的值为0，则说明不需要用startValue来把sum提升到1，那么直接返回1即可，否则返回startValue本身