/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const length = s.length;
  const arr = Array.from(s);
  for (let i = 0; i < length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k, length) - 1;

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
};

console.log(reverseStr("abcd", 2));
