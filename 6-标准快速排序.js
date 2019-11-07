let arr = [4, 5, 6, 7, 8, 3, 4, 1, 2, 9, 12, 43];

function  standardQuickSort (arr,begin,end){
    if(arr == null)return;
    if(begin >= end - 1) return;
    let left = begin,right = end;
    do{
        do left++;while(left < right && arr[left] < arr[begin]);
        do right--;while(left < right && arr[right] > arr[begin]);
        if(left < right)  [arr[left],arr[right]] = [arr[right],arr[left]];
    }while(left < right);
    let newPiont = right == left ? right - 1 : right;
    [arr[begin],arr[newPiont]] = [arr[newPiont],arr[begin]];
    standardQuickSort(arr,begin,newPiont);
    standardQuickSort(arr,newPiont + 1,end);
}
standardQuickSort(arr,0,arr.length);
console.log(arr);