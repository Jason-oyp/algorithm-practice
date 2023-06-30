/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  return Math.max(
    ...strs.map((it) => {
      return isNaN(+it) ? it.length : +it;
    })
  );
};
