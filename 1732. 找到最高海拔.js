/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const arr = new Array(gain.length + 1).fill(0);
  for (let i = 0; i < gain.length; i++) {
    arr[i + 1] = arr[i] + gain[i];
  }
  return Math.max(...arr);
};
