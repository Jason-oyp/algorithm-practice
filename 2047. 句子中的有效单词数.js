/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  sentence = sentence.split(/\s+/).filter((it) => it);
  let count = 0,
    ss = ["!", ",", "."];
  for (let i = 0; i < sentence.length; i++) {
    const current = sentence[i];
    if (current.replace(/[0-9]/g, "") !== current) {
      continue;
    }
    const index = current.indexOf("-");
    const _s = current.replace(/-/g, "");
    if (index !== -1) {
      if (_s.length !== current.length - 1) {
        continue;
      }
      const sss = current.split("-");
      if (!sss[0].match(/[a-z]/g) || !sss[1].match(/[a-z]/g)) {
        continue;
      }
      if (index === 0 || index === current.length - 1) {
        continue;
      }
    }
    const s = current.replace(/[!,.]/g, "");
    if (s.length !== current.length && s.length !== current.length - 1) {
      continue;
    }
    if (s.length === current.length - 1) {
      if (!ss.includes(current[current.length - 1])) {
        continue;
      }
    }
    count++;
  }
  return count;
};
