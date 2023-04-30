function cellsInRange(s) {
  let arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const result = [];
  for (let i = arr.indexOf(s[0]); i <= arr.indexOf(s[3]); i++) {
    for (let j = +s[1]; j <= +s[4]; j++) {
      result.push(arr[i] + j);
    }
  }
  return result;
}
