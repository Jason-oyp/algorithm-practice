/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  const set = new Set();
  for (let i = 0; i <= k; i++) {
    set.add(i * shorter + (k - i) * longer);
  }
  if (k === 0) {
    return [];
  }
  return [...set].sort((a, b) => a - b);
};
