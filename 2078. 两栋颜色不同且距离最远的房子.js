/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let i = 0,
    j = colors.length - 1;
  while (colors[j] === colors[0]) j--;
  while (colors[i] === colors[colors.length - 1]) i++;
  return Math.max(j, colors.length - 1 - i);
};
