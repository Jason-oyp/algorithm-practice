/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.replace(/\/+/g, "/");
  const names = path.split("/");
  const stack = [];
  for (let name of names) {
    if (name === "..") {
      if (stack.length) {
        stack.pop();
      }
    } else if (name.length && name !== ".") {
      stack.push(name);
    }
  }
  return "/" + stack.join("/");
};
