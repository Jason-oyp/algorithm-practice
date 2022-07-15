/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  const sb = [];
  for (let ch of s) {
    if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      ch = String.fromCharCode(ch.charCodeAt() | 32);
    }
    sb.push(ch);
  }
  return sb.join("");
};

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s.toLocaleLowerCase();
};

// 由于 [65, 96][65,96] 对应的二进制表示为 [(01000001)_2, (01011010)_2][(01000001)
//     2
//     ​
//      ,(01011010)
//     2
//     ​
//      ]，3232 对应的二进制表示为 (00100000)_2(00100000)
//     2
//     ​
//      ，而对于 [(01000001)_2, (01011010)_2][(01000001)
//     2
//     ​
//      ,(01011010)
//     2
//     ​
//      ] 内的所有数，表示 3232 的那个二进制位都是 00，因此可以对 \textit{ch}ch 的 \text{ASCII}ASCII 码与 3232 做按位或运算，替代与 3232 的加法运算。
