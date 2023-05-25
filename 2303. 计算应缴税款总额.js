/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let totalTax = 0;
  let lower = 0;
  for (const bracket of brackets) {
    const upper = bracket[0],
      percent = bracket[1];
    const tax = (Math.min(income, upper) - lower) * percent;
    totalTax += tax;
    if (income <= upper) {
      break;
    }
    lower = upper;
  }
  return totalTax / 100.0;
};

// ? 这题看不懂
