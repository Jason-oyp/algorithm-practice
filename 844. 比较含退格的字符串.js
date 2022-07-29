/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let ss = "",
    tt = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      ss += s[i];
    } else {
      if (ss.length) ss = ss.substring(0, ss.length - 1);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (t[j] !== "#") {
      tt += t[j];
    } else {
      if (tt.length) tt = tt.substring(0, tt.length - 1);
    }
  }
  return ss === tt;
};

var backspaceCompare = function (s, t) {
  let ss = [],
    tt = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      ss.push(s[i]);
    } else {
      if (ss.length) ss.pop();
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (t[j] !== "#") {
      tt.push(t[j]);
    } else {
      if (tt.length) tt.pop();
    }
  }
  return ss.join("") === tt.join("");
};
