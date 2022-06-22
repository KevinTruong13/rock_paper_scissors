const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const WIN = 1;
const LOSS = -1;
const TIE = 0;

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
    // If inputs are strings, convert into desired case
    if (typeof playerInput == 'string' && typeof opponentInput == 'string') {
        playerInput = playerInput.toLowerCase();
        opponentInput = opponentInput.toLowerCase();
    }
    // Return sentinel value if inputs are not valid
    if (!(checkRockPaperScissors(playerInput) && checkRockPaperScissors(opponentInput))) {
        return "Error; Invalid inputs"
    }
    return evaluateRockPaperScissors(playerInput, opponentInput);
}

// Function evaluates winner in rock paper scissors outcome
function evaluateRockPaperScissors(playerInput, opponentInput) {
    if (playerInput == opponentInput) {
        return 'Tie! Nobody wins';
    } else if (playerInput == ROCK && opponentInput == SCISSORS || playerInput == PAPER && opponentInput == ROCK || playerInput == SCISSORS && opponentInput == PAPER) {
        return `You win! ${capitalize(playerInput)} beats ${capitalize(opponentInput)}`;
    } else {
        return `You lose! ${capitalize(opponentInput)} beats ${capitalize(playerInput)}`;
    }
}

// Function determines if inputs are valid Rock Paper Scissors values
function checkRockPaperScissors(input) {
    return input == ROCK || input == PAPER || input == SCISSORS;
}

// Function capitalizes first letter of string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function displays results of a button selection
function displayResults(e) {
    // Passing corresponding RPS value of button and a computer generated value
    const result = playRound(this.getAttribute('id'), computerPlay());
    document.querySelector('#result').textContent = result;
    if (result.includes('win')) updateScores(WIN);
    else if (result.includes('lose')) updateScores(LOSS);
    else if (result.includes('tie')) updateScores(TIE);
    else console.log('Error, invalid playRound return value');
}

// Function updates running scores. Accepts win status of player one as a boolean.
function updateScores(win) {
    
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', displayResults));