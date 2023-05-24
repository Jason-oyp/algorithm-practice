/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) {
    return false;
  }
  const s = "!@#$%^&*()-+";
  const arr = password.split("");
  if (arr.every((it) => !s.includes(it))) {
    return false;
  }
  let char = arr.map((it) => it.charCodeAt());
  if (char.every((it) => it < 65 || it > 90)) {
    return false;
  }
  if (char.every((it) => it < 97 || it > 122)) {
    return false;
  }
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (arr.every((it) => !num.includes(+it))) {
    return false;
  }
  if (/(.)\1/.test(password)) {
    return false;
  }
  return true;
};
