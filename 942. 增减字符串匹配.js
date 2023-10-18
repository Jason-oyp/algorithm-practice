/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let l = 0,
    h = s.length;
  const arr = new Array(s.length + 1).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[i] = s[i] === "I" ? l++ : h--;
  }
  arr[s.length] = l;
  return arr;
};
