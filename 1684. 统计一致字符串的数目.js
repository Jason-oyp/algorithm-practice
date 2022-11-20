/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  allowed = new Set(allowed);
  for (let i = 0; i < words.length; i++) {
    const set = [...new Set(words[i])];
    let flag = true;
    for (let j = 0; j < set.length; j++) {
      if (!allowed.has(set[j])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
};

var countConsistentStrings = function (allowed, words) {
  // 解法二：
  const reg = new RegExp(`[${allowed}]`, "g"); // /[ab]/g
  return words.filter((word) => word.replace(reg, "") === "").length;
};
