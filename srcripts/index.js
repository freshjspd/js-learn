let a = [1,4,-4,3,8,-1, -6, 0, 0, -3, 2, -9, 11, 0, 2], i;
let sumNeg=0, countNeg=0;
let arrNegEl = [] , j =0 ;

for(i=0; i<a.length; i++){
    if(a[i] < 0){
        sumNeg = sumNeg + a[i];
        countNeg++;
        a[i] = 0;
        arrNegEl[j] = i;
        j++;
    }
}

console.log(a);
console.log('Sum neg el ',sumNeg);
console.log('Count neg el ', countNeg);
console.log(arrNegEl);

function task5(a,n){
    let res = [];
    for(let i=0; i<n; i++){
        res[i] = a[i];
    }
    return res;
}

function task8(arr, index1, index2){
    let buf;
    buf = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = buf;
    return arr;
}



