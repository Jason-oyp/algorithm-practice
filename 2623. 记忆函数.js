/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cached = new Map();
  return function (...args) {
    const argsString = JSON.stringify(args);
    if (cached.has(argsString)) {
      return cached.get(argsString);
    }
    const ret = fn(...args);
    cached.set(argsString, ret);
    return ret;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
