/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const arr1 = new Array(s.length).fill(null);
  const arr2 = new Array(arr1.length).fill(null);
  for (let i = 0; i < s.length; i++) {
    const index = arr1.indexOf(s[i]);
    if (index > -1) {
      arr2[index] = true;
    } else {
      arr1[i] = s[i];
      arr2[i] = false;
    }
  }
  const index = arr2.indexOf(false);
  return index > -1 ? arr1[index] : " ";
};
