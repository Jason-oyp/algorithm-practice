/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = [];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (stack.length) result += "(";
      stack.push("(");
    } else {
      const len = stack.length;
      if (len !== 1) {
        result += ")";
      }
      stack.pop();
    }
  }
  return result;
};
