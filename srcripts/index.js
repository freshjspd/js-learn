// task 2
// функцию , которая считает сумму чисел от limit1 до limit2
// *функцию , которая считает сумму чисел от limit1 до limit2 но кратные value

function sumForLimits(limit1, limit2){
    let sum = 0;
    for(let i = limit1; i<= limit2; i++){
        sum = sum + i;
    }
    return sum;
}

function sumForLimitsAdv(limit1, limit2, value){
    let sum = 0;
    for(let i = limit1; i<= limit2; i++){
        (i%value == 0) ? sum = sum + i : sum;
        }
    }
    return sum;
}

// task 3
// функцию которая дополняет число нулями
// zeros(77, 5)   =>   0000077
// *** // zeros(-77, 5)   =>   -0000077


function zeros(value, countZeros){
    let res = '';
    (value < 0) ? { res = res + '-', value = -value} : value;
    for(i=1; i<=countZeros; i++){
        res = res + '0';
    }
    res = res + value;
    return res;
}


console.log( zeros(77,5));

