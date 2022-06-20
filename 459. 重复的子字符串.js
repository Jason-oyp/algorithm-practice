/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).indexOf(s, 1) !== s.length;
};

//  可以直接判断 str 中去除首尾元素之后，是否包含自身元素S。如果包含。则表明存在重复子串。
