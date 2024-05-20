let humanScore = 0;
let computerScore = 0;

let results = document.getElementById("results");

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            break;
    }
}

function getHumanChoice(humanChoice){
    // let humanChoice = (prompt("Choose rock, paper, or scissors", "rock | paper | scissors"));
    // if(!humanChoice){
    //     alert("Please Play with Me?");
    //     return getHumanChoice();
    // };
    return humanChoice.toLowerCase();
}

function compareChoices(humanChoice, computerChoice){
    // rock > scissors
    // scissors > paper
    // paper > rock
    switch (humanChoice) {
        case "rock":
            if(computerChoice === "scissors") {return true;}
            else if(computerChoice === "paper"){return false;}
            else return null;
            break;
        case "paper":
            if(computerChoice === "rock") {return true;}
            else if(computerChoice === "scissors"){return false;}
            else return null;
            break;
        case "scissors":
            if(computerChoice === "paper") {return true;}
            else if(computerChoice === "rock"){return false;}
            else return null;
            break;
        default:
            break;
    }
}

function playRound(humanChoice, computerChoice){
    // if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    //     //Lets see who won
    //     let humanWon = false;
        
        results.innerHTML = constructEndString(compareChoices(humanChoice, computerChoice), humanChoice, computerChoice);
    // }else{
    //     alert("Please Enter Either rock, paper, or scissors");
    //     // humanChoice = getHumanChoice();
    //     return playRound(getHumanChoice(), getComputerChoice());
    // }

    // console.log(humanChoice, computerChoice);

    function constructEndString(humanWon, humanChoice, computerChoice){
        let winner, loser;
        if(humanWon === null){
            // return console.log(`It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}`);
            return `It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}\nHumanScore= ${humanScore}, ComputerScore= ${computerScore}`;
        }
        
        else {
            humanWon ? (winner = humanChoice, loser = computerChoice, humanScore++) : (winner = computerChoice, loser = humanChoice, computerScore++);
            // return console.log(`You ${humanWon ? "Win" : "Lose"}! ${winner} beats ${loser}: HumanScore= ${humanScore}, ComputerScore= ${computerScore}`);
            return `You ${humanWon ? "Win" : "Lose"}! ${winner} beats ${loser}\nHumanScore= ${humanScore}, ComputerScore= ${computerScore}`;
        }
    }

    if(humanScore >= 5 || computerScore >= 5) endGame(humanScore, computerScore);

}

function endGame(){
    if(humanScore >= 5){
        alert("You Win!");
        humanScore = computerScore = 0;
    }else if(computerScore >= 5){
        alert("The Computer Wins, better luck next time");
        humanScore = computerScore = 0;
    }
}

function playGame(event){
    // for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(event.srcElement.innerHTML), getComputerChoice())
    // }
    // console.log(event.srcElement.innerHTML);
}

// playGame();
let container = document.getElementById("container");

let rockBtn = document.createElement("BUTTON");
rockBtn.innerHTML = "ROCK";
rockBtn.addEventListener("click", playGame);
container.appendChild(rockBtn);

let paperBtn = document.createElement("BUTTON");
paperBtn.innerHTML = "PAPER";
paperBtn.addEventListener("click", playGame);
container.appendChild(paperBtn);

let scissorsBtn = document.createElement("BUTTON");
scissorsBtn.innerHTML = "SCISSOR";
scissorsBtn.addEventListener("click", playGame);
container.appendChild(scissorsBtn);