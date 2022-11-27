/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const arr = new Array(encoded.length + 1);
  arr[0] = first;
  for (let i = 1; i < encoded.length + 1; i++) {
    arr[i] = arr[i - 1] ^ encoded[i - 1];
  }
  return arr;
};
