/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const result = command.replace(/\(\)/g, "o");
  return result.replace(/\(al\)/g, "al");
};
