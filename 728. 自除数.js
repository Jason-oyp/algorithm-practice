/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }
  return result;
};

var isSelfDividing = function (num) {
  const arr = String(num).split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 || num % arr[i] !== 0) {
      return false;
    }
  }
  return true;
};

// 解法二：

// var selfDividingNumbers = function (left, right) {
//   const ans = [];
//   for (let i = left; i <= right; i++) {
//     if (isSelfDividing(i)) {
//       ans.push(i);
//     }
//   }
//   return ans;
// };

// var isSelfDividing = (num) => {
//   let temp = num;
//   while (temp > 0) {
//     const digit = temp % 10;
//     if (digit === 0 || num % digit !== 0) {
//       return false;
//     }
//     temp = Math.floor(temp / 10);
//   }
//   return true;
// };
