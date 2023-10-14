/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  for (let p in obj) {
    if (!obj[p]) {
      delete obj[p];
    } else if (typeof obj[p] === "object") {
      obj[p] = compactObject(obj[p]);
    }
  }
  return obj instanceof Array ? obj.filter((it) => it) : obj;
};
