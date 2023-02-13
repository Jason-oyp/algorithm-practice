/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
const map = {
  // 2: 'abc',
  // 3: 'def',
  // 4: 'ghi',
  // 5: 'jkl',
  // 6: 'mno',
  // 7: 'pqrs',
  // 8: 'tuv',
  // 9: 'wxyz'
  a: 2,
  b: 2,
  c: 2,
  d: 3,
  e: 3,
  f: 3,
  g: 4,
  h: 4,
  i: 4,
  j: 5,
  k: 5,
  l: 5,
  m: 6,
  n: 6,
  o: 6,
  p: 7,
  q: 7,
  r: 7,
  s: 7,
  t: 8,
  u: 8,
  v: 8,
  w: 9,
  x: 9,
  y: 9,
  z: 9,
};
var getValidT9Words = function (num, words) {
  return words.filter((it) => {
    let s = "";
    for (let i = 0; i < it.length; i++) {
      s += map[it[i]];
    }
    if (num === s) {
      return true;
    }
  });
};
