var shipPart1 = 3;
var shipPart2 = 4;
var shipPart3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

function playGame() {
while(hits < 3) {
    guess = prompt("Enter a number 1-7!");
    guesses++

    if(guess >= shipPart1 && guess <= shipPart3) {
    alert("Nice job, you hit them!");
        hits++
    }
    else {
    alert("Oh no, you missed!");
    }
}
if (hits == 3) {
    isSunk = true;
}
alert("Congratulations, here is your score: " + hits + "/n" + guesses);
}

