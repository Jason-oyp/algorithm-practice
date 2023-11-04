/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return (
    s.length == t.length &&
    s !== t &&
    [...s].sort().join("") === [...t].sort().join("")
  );

  if (s === t) return false;
  let sNum = {};
  let tNum = {};
  for (let p of s) {
    sNum[p] = (sNum[p] || 0) + 1;
  }
  for (let p of t) {
    tNum[p] = (tNum[p] || 0) + 1;
  }
  for (let prop in sNum) {
    if (sNum[prop] !== tNum[prop]) {
      return false;
    }
    delete tNum[prop];
  }
  return Object.keys(tNum).length === 0;
};
