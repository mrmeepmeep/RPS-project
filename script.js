playerSelection = playerSelection.toLowerCase
computerSelection = computerSelection.toLowerCase

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3 + 1)

    switch (randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS"
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == computerSelection){
            return "Its a DRAW!";
}
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
            playerSelection === "PAPER" && computerSelection === "ROCK" ||
            playerSelection === "SCISSORS" && computerSelection === "PAPER");{
            return "You win!";
    
    }
    else {
        return "You lose!;"
    }
  


}
prompt("Pick your weapon")
        
    
            

    
 

    


    function game (playRound) {
        for (var i = 1; 1 < 6; i++) playRound(i);
    }



const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));