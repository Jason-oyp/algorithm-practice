/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const box = {};
  for (let i = lowLimit; i <= highLimit; i++) {
    // const result = String(i).split('').reduce((prev, next) => +prev + +next, 0)
    let result = 0,
      x = i;
    while (x !== 0) {
      result += x % 10;
      x = Math.floor(x / 10);
    }
    box[result] = box[result] + 1 || 1;
  }
  return Math.max(...Object.values(box));
};
