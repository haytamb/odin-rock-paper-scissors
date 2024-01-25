let playerScore = 0;
let computerScore = 0;
const btnNodelist = document.querySelectorAll('.choice');
const outcomeDisplay = document.querySelector('#outcome');
const scoreDisplay = document.querySelector('#score');
const resetBtn = document.querySelector('#reset');

function getComputerChoice () {
    const CHOICE = ['Rock', 'Paper', 'Scissors'];
    return CHOICE[(Math.floor(Math.random() * CHOICE.length))]
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcomeDisplay.textContent = "It's a tie! Try again.";
        scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    } else if (
        playerSelection ==='Rock' && computerSelection === 'Scissors' ||
        playerSelection ==='Paper' && computerSelection === 'Rock' ||
        playerSelection ==='Scissors' && computerSelection === 'Paper') 
        {
            outcomeDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
            scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
            if (playerScore === 5) {
                outcomeDisplay.textContent = 'Game Over. You won!';
                btnNodelist.forEach (element => {
                    element.disabled = true;
                })
            }
        }  else {
            outcomeDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
            scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
            if (computerScore === 5) {
                outcomeDisplay.textContent = 'Game Over. You lost!';
                btnNodelist.forEach (element => {
                    element.disabled = true;
                })
            }
        }
    }

btnNodelist.forEach(element => {
    element.addEventListener('click', () => {
    const playerSelection = element.textContent;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    })
})

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    outcomeDisplay.textContent = '';
    scoreDisplay.textContent = ''
    btnNodelist.forEach(element => {element.disabled = false;})
})
    

    
    





