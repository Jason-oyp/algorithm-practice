var countHillValley = function (nums) {
  let t = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    } else {
      let a = nums[i - 1] > nums[i] && nums[i + 1] > nums[i];
      let b = nums[i - 1] < nums[i] && nums[i + 1] < nums[i];
      if (a || b) {
        t++;
      }
    }
  }
  return t;
};
