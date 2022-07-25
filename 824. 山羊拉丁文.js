/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const arr = sentence.split(" ");
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  return arr
    .map((item, i) => {
      const one = item[0];
      if (set.has(one)) {
        item += "ma";
      } else {
        item = item.slice(1) + one + "ma";
      }
      item += new Array(i + 1).fill("a").join("");
      return item;
    })
    .join(" ");
};
