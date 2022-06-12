const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

// Simulates a computer player that picks randomly between 'Rock', 'Paper', 'Scissors'
function computerPlay() {
    switch (randInt(1, 4)) {    // Generates a random int between 1 to 3, corresponding to rock paper scissors values
        case 1:
            return ROCK;
            break;
        case 2:
            return PAPER;
            break;
        case 3:
            return SCISSORS;
            break;
        default:
            return 'Error in random generation';
    }
}

// Function returns a random number between min (inclusive) and max (exclusive)
function randInt(min, max) {
    // Math.random() generates a random number between 0-1. 
    // That number is multiplier by (max - min) to get full desired range. 
    // Math.floor() rounds number to integer.
    // min added at the end to match minimum value.
    return Math.floor(Math.random() * (max - min)) + min;
}

// Function stimulates a round of Rock Papers Scissors given player and opponent inputs
function playRound(playerInput, opponentInput) {
    // Return sentinel value if inputs are not valid
    if (!(checkRockPaperScissors(playerInput) && checkRockPaperScissors(opponentInput))) {
        return "Error; Invalid inputs"
    }
    

    if (playerInput == opponentInput) {
        return 'Tie! Nobody wins';
    } else if (playerInput == ROCK && opponentInput == SCISSORS || playerInput == PAPER && opponentInput == ROCK || playerInput == SCISSORS && opponentInput == PAPER) {
        return `You win! ${playerInput} beats ${opponentInput}`;
    } else {
        return `You lose! ${opponentInput} beats ${playerInput}`;
    }
}