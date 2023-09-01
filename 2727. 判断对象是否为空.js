/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // if (obj instanceof Array) {
  //     return obj.length === 0
  // }
  return !Object.keys(obj).length;
};
