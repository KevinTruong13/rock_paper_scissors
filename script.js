// Simulates a computer player that picks randomly between 'Rock', 'Paper', 'Scissors'
function computerPlay() {
    switch (randInt(1, 4)) {    // Generates a random int between 1 to 3, corresponding to rock paper scissors values
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            return 'Error in random generation';
    }
}

// Function returns a random number between min (inclusive) and max (exclusive)
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}