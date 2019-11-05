let arr = [4, 5, 6, 7, 8, 3, 4, 1, 2, 9, 12, 43];

function quickSort (arr) {
    if(arr == null || arr.length == 0) return [];
    var leader = arr[0];
    var left = [],right = [];
    for(var i = 1;i < arr.length;i++){
        if(arr[i] < leader) left.push(arr[i]);
        else right.push(arr[i]);
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return left.concat(right);
}
console.log(quickSort(arr));