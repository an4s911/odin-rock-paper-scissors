const options = ["rock", "paper", "scissors"];
function computerPlay() {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    if (!validateSelection(playerSelection)) {
        return "Invalid selection";
    }

    const winningSelection = getWinner(playerSelection, computerSelection);

    if (playerSelection === winningSelection) {
        // Player wins
        return true;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === winningSelection) {
        // Computer wins
        return false;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        // Tie
        // returns null
        return winningSelection;
        return "Tie";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        let computerSelection = computerPlay();

        alert(`YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}`)

        let result = playRound(playerSelection, computerSelection);

        if (result === true) {
            playerScore++;
            alert(`Round ${i}\nYou win this round! ${playerSelection} beats ${computerSelection}`)
        } else if (result === false) {
            computerScore++;
            alert(`Round ${i}\nYou lose this round! ${computerSelection} beats ${playerSelection}`)
        } else {
            alert(`Round ${i}\nTie!`)
        }
        console.clear();
        console.log(`\n------------------\nYour score: ${playerScore}\nComputer Score: ${computerScore}\n-------------------\n`);
    }
    if (playerScore === computerScore) {
        alert("THE GAME IS A TIE!!!!")
    } else if (playerScore > computerScore) {
        alert("YOU WIN THE GAME!!!!!!!")
    } else {
        alert("YOU LOSE THE GAME!!!!!")
    }
    console.clear();
    console.log(`\nFINAL SCORES:\n------------------\nYour score: ${playerScore}\nComputer Score: ${computerScore}\n-------------------\n`);
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

game();