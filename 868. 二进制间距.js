/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const bin = n.toString(2);
  let max = 0,
    start = 0;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "1") {
      const width = i - start;
      if (width > max) {
        max = width;
      }
      start = i;
    }
  }
  return max;
};

binaryGap(22);
