/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const start = new Set(paths.map((it) => it[0]));
  const end = new Set(paths.map((it) => it[1]));
  for (const p of start) {
    if (end.has(p)) {
      end.delete(p);
    }
  }
  return [...end][0];
};
