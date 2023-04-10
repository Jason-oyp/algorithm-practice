/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  let set = new Set(),
    len = digits.length;
  for (let i = 0; i < len; i++) {
    if (digits[i] === 0) {
      continue;
    }
    for (let j = 0; j < len; j++) {
      if (j === i) {
        continue;
      }
      for (let k = 0; k < len; k++) {
        if (k === j || k === i) {
          continue;
        }
        if (digits[k] & 1) {
          continue;
        }
        set.add(digits[i] * 100 + digits[j] * 10 + digits[k]);
      }
    }
  }
  return [...set].sort((a, b) => a - b);
};
