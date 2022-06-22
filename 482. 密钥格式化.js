/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const result = s
    .replace(/-/gm, "")
    .split("")
    .map((it) => it.toUpperCase());
  console.log(result);
  if (result.length <= k) {
    return result.join("");
  }

  const arr = [];
  let str = "";
  for (let i = result.length - 1; i >= 0; i--) {
    str += result[i];
    if (str.length === k) {
      arr.push(str.split("").reverse().join(""));
      str = "";
    }
  }
  arr.push(str.split("").reverse().join(""));
  return arr
    .filter((item) => item)
    .reverse()
    .join("-");
};

licenseKeyFormatting("5F3Z-2e-9-w", 3);
licenseKeyFormatting("2-5g-3-J", 2);

var licenseKeyFormatting = function (s, k) {
  const ans = [];
  let cnt = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "-") {
      cnt++;
      ans.push(s[i].toUpperCase());
      if (cnt % k === 0) {
        ans.push("-");
      }
    }
  }
  if (ans.length > 0 && ans[ans.length - 1] === "-") {
    ans.pop();
  }

  return ans.reverse().join("");
};
