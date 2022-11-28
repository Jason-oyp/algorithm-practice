/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  const maxArr = rectangles.map((it) => Math.min(...it));
  let max = Number.MIN_SAFE_INTEGER,
    count = 0;
  for (let i = 0; i < maxArr.length; i++) {
    if (maxArr[i] > max) {
      max = maxArr[i];
      count = 1;
    } else if (maxArr[i] === max) {
      count++;
    }
  }
  return count;
};
