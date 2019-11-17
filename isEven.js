//function isEven(num) {
//return (num % 2) == 0;}

function factorial(num) {
    if (num === 1) {
        return num
    } else {
        return num * factorial(num - 1)
    }
}