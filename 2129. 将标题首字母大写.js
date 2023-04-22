/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  return title
    .split(" ")
    .map((it) => {
      if (it.length <= 2) {
        return it.toLocaleLowerCase();
      }
      return it[0].toLocaleUpperCase() + it.slice(1).toLocaleLowerCase();
    })
    .join(" ");
};
