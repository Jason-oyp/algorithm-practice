/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let result = 0;
  let temp = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (i === 0) {
      temp = timeSeries[i] + duration - 1;
      continue;
    }
    if (temp < timeSeries[i]) {
      result += duration;
    } else {
      result += timeSeries[i] - timeSeries[i - 1];
    }
    temp = timeSeries[i] + duration - 1;
  }
  result += duration;
  return result;
};
