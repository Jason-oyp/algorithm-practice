/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    const s = String(i).split("");
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      sum += Number(s[i]);
    }
    if (!(sum & 1)) {
      count++;
    }
  }
  return count;
};
