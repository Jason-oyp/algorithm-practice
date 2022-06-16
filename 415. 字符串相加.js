/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let addOne = false,
    num1Length = num1.length,
    num2Length = num2.length,
    temp = null;
  if (num1Length < num2Length) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }
  const sub = num1.length - num2.length;
  num2 = new Array(sub)
    .fill(0)
    .concat([...num2])
    .join("");
  const result = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    let sum = +num1[i] + +num2[i];
    if (addOne) {
      sum++;
      addOne = false;
    }
    if (sum >= 10) {
      addOne = true;
      result.unshift(sum - 10);
    } else {
      addOne = false;
      result.unshift(sum);
    }
  }
  if (addOne) {
    result.unshift(1);
  }
  return result.join("");
};

addStrings("0", "0");
