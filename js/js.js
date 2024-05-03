let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let humanChoice = (prompt("Choose rock, paper, or scissors", "rock | paper | scissors"));
    if(!humanChoice){
        alert("Please Play with Me?");
        return getHumanChoice();
    };
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
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        //Lets see who won
        let humanWon = false;
        
        constructEndString(compareChoices(humanChoice, computerChoice), humanChoice, computerChoice);
    }else{
        alert("Please Enter Either rock, paper, or scissors");
        // humanChoice = getHumanChoice();
        return playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(humanChoice, computerChoice);

    function constructEndString(humanWon, humanChoice, computerChoice){
        let winner, loser;
        if(humanWon === null){
            return console.log("It's a tie!");
        }
        
        else {
            humanWon ? (winner = humanChoice, loser = computerChoice, humanScore++) : (winner = computerChoice, loser = humanChoice, computerScore++);
            return console.log(`You ${humanWon ? "Win" : "Lose"}! ${winner} beats ${loser}: HumanScore= ${humanScore}, ComputerScore= ${computerScore}`);
        }
    }



    // console.log(constructEndString());
}

function playGame(){
    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
}

playGame();