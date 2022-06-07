// 解法1

let list = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var reverseVowels = function (s) {
  let arr = [];
  let sr = s.split("");
  let left = 0,
    right = sr.length - 1;
  while (left < right) {
    while (!list.includes(sr[left]) && left < right) {
      left++;
    }
    while (!list.includes(sr[right]) && left < right) {
      right--;
    }
    let temp = sr[left];
    sr[left] = sr[right];
    sr[right] = temp;
  }
  return sr.join("");
};

// 解法2

let list = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
var reverseVowels = function(s) {
  let arr = [];
  let sr = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (list.includes(s[i])) {
        arr.push({
            index: i,
            value: s[i]
        })
    }
  }
  let left = 0, right = arr.length - 1
  while (left < right) {
      let leftV = arr[left]
      let rightV = arr[right]
      sr[leftV.index] = rightV.value
      sr[rightV.index] = leftV.value
      left++
      right--
  }
  return sr.join('')
};
