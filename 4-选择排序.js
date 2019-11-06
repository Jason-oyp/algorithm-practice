let arr = [4, 5, 6, 7, 8, 3, 4, 1, 2, 9, 12, 43];

//排序的本质是比较和交换
function compare(a, b) {
    return a < b;
}

function exchange(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var max = 0;
        for (var j = 0; j < arr.length - i; j++) {
            if (compare(arr[max], arr[j])) {
                max = j;
            }
        }
        exchange(arr,max,arr.length - i-1);
    }
    return arr;
}
console.log(sort(arr));