

let randomNumber = () => Math.floor( Math.random()*3 +1);

function getComputerChoice(){
 switch(randomNumber()){
    case 1:
        return "rock";
    case 2:
        return "paper";
    case 3:
        return "scissor"; 
 }
 return "fodase";
}
// return a random number between 1 and 3 inclusive
let loseMessage = (choice1, choice2) => {
    console.log("Lose! You play "+choice1+" against "+ choice2);
    return "computerWin";
}
let winMessage = (choice1, choice2) => {
    console.log("Win! You play "+choice1+" against "+ choice2);
    return "playerWin";
}
let drawMessage = (choice1, choice2) => {
    console.log("Draw! You play "+choice1+" against "+ choice2);
        return "draw";
}


function getPlayersChoice(){
    let validation = false;
    let choice;
    
    while (validation == false) {
        choice = prompt("Select 'rock', 'paper', or 'scissor" );

        if (typeof choice === "string"){
            choice = choice.toLocaleLowerCase();
            if (typeof choice === "string" && choice === 'rock' || choice === 'scissor' || choice === 'paper'){
            
                validation = true;
            } 
            else {
                console.log("Invalid value, please try again");
            }
        } else {
            console.log("Invalid value, please try again");
        }
    } 
    return choice;
}





//play a round
function playRound(choice1, choice2){
    console.log("Your choose: "+choice1+"\nComputers choose: "+ choice2);
    if (choice1 == choice2) {
        drawMessage(choice1, choice2);
    } else {
        switch(choice1){
            case "rock":
                return choice2 == "scissor" ? winMessage(choice1, choice2) 
                : loseMessage(choice1, choice2);
            case "scissor":
                return choice2 == "paper" ? winMessage(choice1, choice2) 
                : loseMessage(choice1, choice2);
            case "paper":
                return choice2 == "rock" ? winMessage(choice1, choice2) 
                : loseMessage(choice1, choice2);
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winner;
    console.log("Welcome to the rock paper scissor game!")
    for(let i = 1; i<= 5; i++){
        console.log(`Round #${i} `)
        choice1 = getPlayersChoice();
        choice2 = getComputerChoice();
        
        winner = playRound(choice1, choice2);
        winner === "playerWin" ? playerScore++ : computerScore++;
        console.log(`Player score: ${playerScore} \nComputer score: ${computerScore}`);
    }
    if(playerScore == computerScore){
        console.log("DRAW!");
    } else if(playerScore > computerScore) {
        console.log("YOU WIN!");
    } else {
        console.log("YOU LOSE!");
    }
}
game();


