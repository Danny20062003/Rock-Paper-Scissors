let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScor = document.querySelector("#user-score");
const compScor = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];
}

const drawGame = () => {
    console.log("game is draw");
    msg.innerText = "Draw game";
    msg.style.backgroundColor = "#081b31";

}
const showWinner = (userwin, userChoice, compchoice) =>{
 if(userwin){
    msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    userScor.innerText = userScore++;
 }else{
    msg.innerText = `You lost. ${compchoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScor.innerText = compScore++;
 }
}

const playGame = (userChoice) =>{
    const compchoice = genCompChoice();

    if(userChoice === compchoice){
        drawGame();
    }else{
        if(userChoice ==="rock"){
            userwin = compchoice ==="paper" ? false : true ;

        }else if (userChoice ==="paper"){
            userwin = compchoice ==="scissors" ? false : true;

        }else{
            userwin = compchoice ==="rock" ? false : true ;
        }

        showWinner(userwin, userChoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});