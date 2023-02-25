// 1,2,3,4,5
// 10,20,30

//result :  5,4,3,2,1,10,20,30  => 5,4,3,2,1,-1,30
//result :  "5,4,3,2,1,10,20,30"

let a1 = [1,2,3,4,5], a2 = [10,20,30];

console.log(a1.reverse().concat(a2));
console.log( a1.reverse().concat(a2).splice(5,2,-1) );

result =  a1.reverse().concat(a2);
a1.splice(5,2,-1);
console.log(result);

function task1(a1, a2){
    let res = [] , i, j, res2 = [];
    for(i=0; i<a1.length; i++){
        res[i] = a1[a1.length - i -1];
    }
    for(j=0; j<a2.length; j++, i++){
        res[i] = a2[j];
    }
    for(i=0, j=0; i<res.length; i++){
        if(i>=5 && i<=6) continue;
        res2[j] = res[i];
        j++;
    }
    return res2;
}

// создать функцию которая возвращает обьдинение массивов без 0 и отриц элементов

function task2(arr1, arr2){
    return arr1.concat(arr2).filter(el => el > 0);
}

[0,1,2,3,4,5,6,7,8,9]
index1 = 2;
index2 = 4;

a.splice(index1, 0 , a.splice(index2));
a.splice(index1 , 0, [0,1,2,3]);

0,1,   4,5,6,7,8,9, 2,3,4,5,6,7,8,9
