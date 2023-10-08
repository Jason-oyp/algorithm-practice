/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const obj = {};
  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i]);
    if (!obj[result]) {
      obj[result] = [];
    }
    obj[result].push(this[i]);
  }
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
