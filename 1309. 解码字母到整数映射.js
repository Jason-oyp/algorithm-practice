/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const map = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    "10#": "j",
    "11#": "k",
    "12#": "l",
    "13#": "m",
    "14#": "n",
    "15#": "o",
    "16#": "p",
    "17#": "q",
    "18#": "r",
    "19#": "s",
    "20#": "t",
    "21#": "u",
    "22#": "v",
    "23#": "w",
    "24#": "x",
    "25#": "y",
    "26#": "z",
  };
  const arr = s.split("#");
  const result = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "#") {
      const temp = s[i - 2] + s[i - 1] + "#";
      // console.log()
      i -= 2;
      result.push(map[temp]);
    } else {
      result.push(map[s[i]]);
    }
  }
  return result.reverse().join("");
};
