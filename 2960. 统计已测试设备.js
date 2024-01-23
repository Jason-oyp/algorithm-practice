/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let ans = 0;
  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      ans++;
      for (let j = i + 1; j < batteryPercentages.length; j++) {
        batteryPercentages[j]--;
      }
    }
  }
  return ans;
};

// 解法二：
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let ans = 0;
  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > ans) {
      ans++;
    }
  }
  return ans;
};
