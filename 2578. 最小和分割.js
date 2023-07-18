/**
 * @param {number} num
 * @return {number}
 */
function splitNum(num) {
  let arr = num
    .toString()
    .split("")
    .map((num) => +num);
  let str1 = "",
    str2 = "";
  arr.sort((a, b) => b - a);
  while (arr.length > 0) {
    if (str1.length === str2.length) {
      str1 += arr.pop();
    } else {
      str2 += arr.pop();
    }
  }
  return +str1 + +str2;
}
