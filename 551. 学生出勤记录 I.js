/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let A = 0;
  for (const prop of s) {
    if (prop !== "A") continue;

    A++;
    if (A === 2) return false;
  }
  if (s.split("LLL").length >= 2) {
    return false;
  }
  return true;
};
