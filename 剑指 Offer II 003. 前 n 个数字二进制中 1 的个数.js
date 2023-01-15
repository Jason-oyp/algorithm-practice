/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  if (n === 0) {
    return [0];
  }
  const arr = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    const result = i
      .toString(2)
      .split("")
      .filter((it) => it === "1").length;
    // console.log(i.toString(2).split('').filter(it => it === '1'))
    arr[i] = result;
  }
  return arr;
};
