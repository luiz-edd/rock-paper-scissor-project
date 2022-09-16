console.log("Hello World!!!!!!!!!!!!");

function getComputerChoice(){
 switch(randomNumber()){
    case 1:
        return "rock";
    case 2:
        return "scissor";
    case 3:
        return "paper"; 
 }
}
// return a random number between 1 and 3 inclusive
let randomNumber = () => Math.floor( Math.random()*3 +1);