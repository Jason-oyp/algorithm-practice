function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function test() {
  const arr = new Array(5);
  function _run(arr, i) {
    if (i === 5) {
      return arr;
    }
    const num = getRandom(2, 32);
    if (!arr.includes(num)) {
      arr[i++] = num;
    }

    return _run(arr, i);
  }
  return _run(arr, 0);
}
