var similarPairs = function (words) {
    // 将字符串数组的每一项去重排序
    words = words.map(item => [...new Set(item)].sort().join(''))
    let res = 0
    // 双重循环，相等结果就加1
    for (let i = 0; i < words.length - 1; i++) {
        for (j = i + 1; j < words.length; j++) {
            if (words[i] == words[j]) res++
        }
    }
    return res
};