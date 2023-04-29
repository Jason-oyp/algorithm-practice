/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  function _count(num1, num2, count) {
    if (num1 === 0 || num2 === 0) {
      return count;
    }
    count++;
    if (num1 > num2) {
      num1 = num1 - num2;
      return _count(num1, num2, count);
    } else if (num1 < num2) {
      num2 = num2 - num1;
      return _count(num1, num2, count);
    } else {
      return count;
    }
  }
  return _count(num1, num2, 0);
};
var countOperations = function (num1, num2) {
  let cnt = 0;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 >= num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
    cnt++;
  }
  return cnt;
};
