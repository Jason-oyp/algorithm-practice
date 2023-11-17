/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function (temperatureA, temperatureB) {
  let cur = 0;
  let res = 0;
  for (let i = 1; i < temperatureA.length; ++i) {
    if (
      (temperatureA[i] == temperatureA[i - 1] &&
        temperatureB[i] == temperatureB[i - 1]) ||
      (temperatureA[i] > temperatureA[i - 1] &&
        temperatureB[i] > temperatureB[i - 1]) ||
      (temperatureA[i] < temperatureA[i - 1] &&
        temperatureB[i] < temperatureB[i - 1])
    ) {
      cur++;
    } else {
      res = Math.max(res, cur);
      cur = 0;
    }
  }
  return Math.max(res, cur);
};
