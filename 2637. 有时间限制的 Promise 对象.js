/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    let timer;
    const timeoutPromise = new Promise((res, rej) => {
      timer = setTimeout(() => rej("Time Limit Exceeded"), t);
    });

    return Promise.race([fn(...args), timeoutPromise]).then((res) => {
      clearTimeout(timer);
      return res;
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
