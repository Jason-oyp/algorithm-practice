/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const indexCs = s.split("").reduce((p, n, i) => {
    n === c ? p.push(i) : "";
    return p;
  }, []);
  const result = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    // const str = s[i];
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < indexCs.length; j++) {
      if (Math.abs(indexCs[j] - i) < min) {
        min = Math.abs(indexCs[j] - i);
      }
    }
    result[i] = min;
  }
  return result;
};
