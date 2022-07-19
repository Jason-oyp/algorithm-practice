var countPrimeSetBits = function (left, right) {
  let ans = 0;
  for (let x = left; x <= right; ++x) {
    if (isPrime(bitCount(x))) {
      ++ans;
    }
  }
  return ans;
};

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i * i <= x; ++i) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const bitCount = (x) => {
  return x.toString(2).split("0").join("").length;
};


// 看看js如何判断有个数是否为质数
// 再看看官网的第二种解法 位移