/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  if (!forts.includes(-1) || !forts.includes(0) || !forts.includes(1)) return 0;
  let result = 0,
    left = -1,
    count = 0;
  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === 0) {
      if (left !== -1) {
        count++;
      }
    } else if (forts[i] === 1) {
      if (forts[left] === -1) {
        result = Math.max(result, count);
        count = 0;
      } else if (forts[left] === 1) {
        count = 0;
      }
      left = i;
    } else if (forts[i] === -1) {
      if (forts[left] === 1) {
        result = Math.max(result, count);
        count = 0;
      } else if (forts[left] === -1) {
        count = 0;
      }
      left = i;
    }
  }
  return result;
};
