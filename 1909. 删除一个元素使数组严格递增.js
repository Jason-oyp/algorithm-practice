var canBeIncreasing = function(nums) {
    let flag = false
    for (let i = 1; i < nums.length; i++) {
      if(nums[i - 1] >= nums[i]) {
        if (flag) {
          return false
        } else {
          flag = true
          const arr1 = nums.slice()
          arr1.splice(i, 1)
  
          const arr2 = nums.slice()
          arr2.splice(i - 1, 1)
          let flag1 = true, flag2 = true
          for (let j = 1; j < arr1.length; j++) {
            if (arr1[j - 1] >= arr1[j]) {
              flag1 = false
            }
          }
          for (let k = 1; k < arr2.length; k++) {
            if (arr2[k - 1] >= arr2[k]) {
              flag2 = false
            }
          }
          return flag1 || flag2
        }
      }
    }
    return true
  };