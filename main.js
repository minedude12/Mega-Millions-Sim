var amountSpent = 1040;
var totalWinnings = 0;
var normalBalls = 5;
var megaBall = 1;
var multiplier;

//Asks for the players five normal guesses
function userGuesses() {
    var guessOne = window.prompt("Enter your first number between 1-70")
    var guessTwo = window.prompt("Enter your second number between 1-70")
    var guessThree = window.prompt("Enter your third number between 1-70")
    var guessFour = window.prompt("Enter your fourth number between 1-70")
    var guessFive = window.prompt("Enter your fifth number between 1-70")
    var guessGoldenNumber = window.prompt("Enter your guess for the Golden Number 1-25");
    console.log("Your guesses are: " + guessOne, guessTwo, guessThree, guessFour, guessFive + " And your Golden Number guess is: " + guessGoldenNumber);
}

userGuesses();

// Assigns a random number to 5 balls (normal in Mega Millions)

function regularBallNumbers() {
    for (var regularBalls = 1; regularBalls < 6; regularBalls++) {
        multiplier = Math.random() * 70;
        normalBalls = multiplier;
        console.log("One Number is: " + Math.round(normalBalls));
    }
}

regularBallNumbers();

function goldenBallNumber() {
    multiplier = Math.random() * 25;
    goldenBall = multiplier;
    console.log("The Golden Ball number is: " + Math.round(goldenBall));
}

goldenBallNumber();

// console.log("The winning numbers are: " + regularBallNumbers);
// console.log("Your total amount spent on tickets is: $" + amountSpent);
// console.log("The amount you have won is: $" + totalWinnings);
// console.log("This is a return of: " + (totalWinnings/amountSpent) * 100 + "%");