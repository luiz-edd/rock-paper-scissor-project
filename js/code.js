

let randomNumber = () => Math.floor( Math.random()*3 +1);
// return a random number between 1 and 3 inclusive

function getComputerChoice(){
 switch(randomNumber()){
    case 1:
        return "rock";
    case 2:
        return "paper";
    case 3:
        return "scissor"; 
 }
 
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


function getMessage(result, choice1, choice2){
    switch(result){
        case "win":
            return "Win! "+choice1+" wins against "+ choice2;
        case "lose":
            return "Lose! "+choice1+" lose against "+ choice2;
        case "draw":
            return "Draw! You both choose "+choice1;
        default:
            return "error";
    }
}



//play a round
function playRound(choice1, choice2 = getComputerChoice()){

    infoMessage.textContent = "You choose: "+choice1+"\n| Computers choose: "+ choice2;
    
    if (choice1 == choice2) {
        resultMessage.textContent = getMessage("draw", choice1, choice2);
        return "draw";
    } else {
        switch(choice1){
            case "rock":
                if(choice2 == "scissor"){
                    resultMessage.textContent = getMessage("win", choice1, choice2);
                    return "win";
                } else {
                    resultMessage.textContent = getMessage("lose", choice1, choice2);
                    return "lose";
                }
            case "scissor":
                if(choice2 == "paper"){
                    resultMessage.textContent = getMessage("win", choice1, choice2);
                    return "win";
                } else {
                    resultMessage.textContent = getMessage("lose", choice1, choice2);
                    return "lose";
                }
            case "paper":
                if(choice2 == "rock"){
                    resultMessage.textContent = getMessage("win", choice1, choice2);
                    return "win";
                } else {
                    resultMessage.textContent = getMessage("lose", choice1, choice2);
                    return "lose";
                }
        }
    }

}

function game(gameResult){
    if(internalPlayerScore === 3 || internalcomputerScore === 3){
        internalPlayerScore = 0;
        internalcomputerScore = 0;
        internalRound = 0;
        playerScore.textContent = internalPlayerScore;
        computerScore.textContent = internalcomputerScore;
    }
    round.textContent = ++internalRound;

    if(gameResult == "win"){
        internalPlayerScore++;
        playerScore.textContent= internalPlayerScore;
        if(internalPlayerScore === 3) {
            infoMessage.textContent = "Congratulations! YOU WIN!"
            resultMessage.textContent = "";
        }
    } else if(gameResult == "lose") {
        internalcomputerScore++;
        computerScore.textContent = internalcomputerScore;
        if(internalcomputerScore === 3){
            infoMessage.textContent = "Unfortunately... YOU LOSE!"
            resultMessage.textContent = "";
        }
    }  
}

    
    

    let scoreMessage = document.querySelector('.score-message');
    let infoMessage = document.querySelector('.info-message');
    let resultMessage = document.querySelector('.result-message');


    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.computer-score');
    let round = document.querySelector('.round');

    let internalPlayerScore = 0;
    let internalcomputerScore = 0;
    let internalRound = 0;

    const rock = document.querySelector('#rock');
        rock.addEventListener('click', () => {
        game(playRound('rock'));
        });

        const paper = document.querySelector('#paper');
        paper.addEventListener('click', ()=> {
            game(playRound('paper'));
        });

        const scissor = document.querySelector('#scissor');
        scissor.addEventListener('click', () => {
            game(playRound('scissor'));
        })



   //get the choice on click buttom and plays a round
    




