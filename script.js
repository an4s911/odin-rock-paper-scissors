const options = ["rock", "paper", "scissors"];

// Set initial value for round
// This will increment after each round
let round = 1;

// Scores
let playerScore = 0;
let computerScore = 0;

// Event listeners for rock, paper and scissors buttons
const playOptions = document.querySelectorAll('.play');
playOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
        playRound(event.target.id);
        // console.log(playRound(event.target.id));
    })
})


function playRound(playerSelection, computerSelection = computerPlay()) {
    if (!validateSelection(playerSelection)) {
        return "Invalid selection";
    }

    const playerSelectionSpanElement = document.querySelector('.selections .player-selection');
    const computerSelectionSpanElement = document.querySelector('.selections .computer-selection');

    const playerScoreSpanElement = document.querySelector('.scores .player-score');
    const computerScoreSpanElement = document.querySelector('.scores .computer-score');

    const resultsP = document.querySelector('div.results p');

    playerSelectionSpanElement.textContent = capitalize(playerSelection);
    computerSelectionSpanElement.textContent = capitalize(computerSelection);

    const winningSelection = getWinner(playerSelection, computerSelection);

    resultsP.textContent = `Round ${round}: `
    if (playerSelection === winningSelection) {
        // Player wins
        resultsP.textContent += `You win this round! ${playerSelection} beats ${computerSelection}`;
        playerScore++;

    } else if (computerSelection === winningSelection) {
        // Computer wins
        resultsP.textContent += `You lose this round! ${computerSelection} beats ${playerSelection}`;
        computerScore++;

    } else {
        // Tie
        resultsP.textContent += 'Tie!';
    }
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent = computerScore;
    console.log(round);
    round++;


    if ([playerScore, computerScore].includes(5)) {
        playOptions.forEach((option) => {
            option.disabled = true;
        })

        // The player
        let winner = "YOU";
        if (computerScore === 5) {
            winner = "COMPUTER";
        }

        resultsP.textContent = `${winner} WON!!!!`

        const resetBtn = document.createElement('button');
        const buttons = document.querySelector('.buttons');
        resetBtn.textContent = "Reset";
        buttons.appendChild(resetBtn);
        resetBtn.addEventListener('click', () => {
            resetGame();
            buttons.removeChild(resetBtn);
        });
    }
}

function resetGame() {
    window.location.reload();
}

function computerPlay() {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function getWinner(first, second) {
    const rockPaper = options.slice(0, 2);
    const rockScissors = [options[0], options[2]];
    const paperScissors = options.slice(1, 3);

    if (first === second) {
        return null;
    }

    if (rockPaper.includes(first) && rockPaper.includes(second)) {
        return "paper";
    } else if (rockScissors.includes(first) && rockScissors.includes(second)) {
        return "rock";
    } else if (paperScissors.includes(first) && paperScissors.includes(second)) {
        return "scissors";
    }
}

function validateSelection(selection) {
    if (options.includes(selection)) return true;
    return false;
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
// game();