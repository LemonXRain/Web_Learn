//function isEven(num) {
//return (num % 2) == 0;}

// function factorial(num) {
// if (num === 1) {
// return num}
// else {
// return num * factorial(num - 1)}}

// 取反向陣列，不改變原陣列
//*** printReverse([1,2,3,4]) ***

function printReverse(num) {
    for (var count = num.length; 0 < count; count--) {
        console.log(num[count - 1]);
    }
}
printReverse([1, 2, 3, 4]);

// 判斷陣列中的值是否都相同
//*** isUniform([1,1,1,1]) ***

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != first) {
            return false;
        }
    }
    return true;
}
isUniform([1, 1, 1, 1]);

// 把陣列中的元素都相加
// *** sumArray([1,2,3,4]) ***

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log("sum : " + sum);
    return sum;
}

sumArray([1, 2, 3, 4]);

console.log("test!!!!!!!!");

console.log("git fork test !!!!!!!!");
// 取陣列中的最大值
// *** max([1,2,3,4]) ***

function maxValue(arr) {
    for (var i = 0; i < arr.length; i++) {
        var max = arr[0];
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
maxValue([1, 2, 3, 4]);