/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const arr = String(num).split("");
  let result = num;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "6") {
      arr[i] = 9;
      return +arr.join("");
    }
  }
  return result;
};
