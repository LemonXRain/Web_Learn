var bingoNumber = 20
var guessNumber = prompt("Guess Number Game! Choise number!");

if (guessNumber == bingoNumber){
    console.log("Good Game!");
}
if (guessNumber < bingoNumber){
    console.log("Too low, my friend!");
}
if (guessNumber > bingoNumber){
    console.log("Too high, my friend!");
}