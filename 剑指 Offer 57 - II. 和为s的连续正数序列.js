/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  if (target < 3) {
    return [];
  }
  const result = [];
  const num = Math.floor(target / 2);
  for (let i = 1; i <= num; i++) {
    let sum = 0,
      k = i;
    while (sum < target) {
      sum += k;
      k++;
    }
    if (sum === target) {
      const arr = [];
      for (let j = i; j <= k - 1; j++) {
        arr.push(j);
      }
      result.push(arr);
    }
  }
  return result;
};
