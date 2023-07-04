/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  const targetIndexArr = words
    .map((it, i) => {
      return it === target && { index: i + 1 };
    })
    .filter((it) => it)
    .map((it) => it.index - 1);
  if (targetIndexArr.length === 0) return -1;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < targetIndexArr.length; i++) {
    min = Math.min(
      min,
      Math.abs(targetIndexArr[i] - startIndex),
      Math.abs(
        Math.min(startIndex, targetIndexArr[i]) +
          words.length -
          Math.max(startIndex, targetIndexArr[i])
      )
    );
  }
  return min;
};
