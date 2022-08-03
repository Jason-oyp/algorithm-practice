/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let s1_obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1_obj[s1[i]]) {
      s1_obj[s1[i]]++;
    } else {
      s1_obj[s1[i]] = 1;
    }
  }
  s1_obj = Object.keys(s1_obj).filter((it) => s1_obj[it] === 1);
  let s2_obj = {};
  for (let i = 0; i < s2.length; i++) {
    if (s2_obj[s2[i]]) {
      s2_obj[s2[i]]++;
    } else {
      s2_obj[s2[i]] = 1;
    }
  }
  s2_obj = Object.keys(s2_obj).filter((it) => s2_obj[it] === 1);
  ss1 = s1_obj.filter((it) => !s2.find((item) => item === it));
  ss2 = s2_obj.filter((it) => !s1.find((item) => item === it));
  return [...ss1, ...ss2];
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  s = (s1 + " " + s2).split(" ");
  let s_obj = {};
  for (let i = 0; i < s.length; i++) {
    if (s_obj[s[i]]) {
      s_obj[s[i]]++;
    } else {
      s_obj[s[i]] = 1;
    }
  }
  s_obj = Object.keys(s_obj).filter((it) => s_obj[it] === 1);
  return s_obj;
};
