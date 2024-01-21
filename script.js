function getComputerChoice () {
    const CHOICE = ['rock', 'paper', 'scissors'];
    return CHOICE[(Math.floor(Math.random() * CHOICE.length))]
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie! Try again.");
        let playerSelection = prompt('choice?').toLocaleLowerCase()
        let computerSelection = getComputerChoice()
        console.log(playerSelection, computerSelection)
        let result = playRound(playerSelection, computerSelection);
        return result;

    } else if (playerSelection == 'rock' ) {
        switch (computerSelection) {
            case 'scissors':
                console.log('You win! Rock beats Scissors');
                return 1;
            case 'paper':
                console.log('You Lose! Paper beats Rock');
                return 0;
        }

    } else if (playerSelection == 'paper' ) {
        switch (computerSelection) {
            case 'rock':
                console.log('You win! Paper beats Rock');
                return 1;
            case 'scissors':
                console.log('You lose! Scissors beats Paper');
                return 0;
        }

    } else if (playerSelection == 'scissors' ) {
        switch (computerSelection) {
            case 'paper':
                console.log('You win! Scissors beats Paper');
                return 1;
            case 'rock':
                console.log('You Lose! Rock beats Scissors');
                return 0;
        }

    } else {
        console.log("Wrong input. Try again.")
        let playerSelection = prompt('choice?')
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection);
        return result;
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('choice?').toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection)
        let result = playRound(playerSelection, computerSelection);
        console.log (result)
        if (result) {
            playerScore++;
        } else if (!result) {
            computerScore++;
        }
    }
    
    if (playerScore > computerScore) {
        console.log (`You won the game! Final score: ${playerScore} - ${computerScore}`)
    } else {
        console.log(console.log (`You lost the game! Final score: ${playerScore} - ${computerScore}`))
    }
}

game()
