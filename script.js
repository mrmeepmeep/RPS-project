function getComputerChoice() { 
let compChoices = ["rock" ,  "paper" , "scissors"]
let randomChoice = Math.floor(Math.random() * compChoices.length) + 1

if (randomChoice ===1) {
    return "rock";
}
if (randomChoice === 2) {
    return "paper";
}
if (randomChoice === 3) {
    return "scissors";
}
}

// console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
computerSelection = computerSelection.toLowerCase ();
if (computerSelection == playerSelection) {
    //print "Tie game!"
}
    else if(
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        // print "You lose!"
    }
    else {

        // print "You win!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(playRound) {
    for (var i=0;i<5;i++){

    }
}




