
const ref_arr = ["rock", "paper", "scissors"];

let choice = "";

const winner_arr = [["rock", "paper", "paper"], ["rock", "scissors", "rock"], ["scissors", "paper", "scissors"]];

const getComputerChoice = () => {
    let int_res = Math.floor(Math.random() * 3);
    return ref_arr[int_res];
};

const getHumanChoice = (choice) => {
    return choice.toLowerCase();
};

const notiText = document.querySelector(".judge");
const winNoti = document.querySelector(".judge1");
const playerScore = document.querySelector(".pScore");
const botScore = document.querySelector(".bScore");

const playRound = (human, computer) => {
    winNoti.textContent = '';
    let res_str = "";
    let winning_gest = "";
    if (human == computer){
        notiText.innerText += `You guys both bet ${human} that's a draw.\n`;
        return;
    };
    

    for (let i = 0; i < 3; i++){
        if (winner_arr[i].every((value) => {
            return (value == human || value == computer);
        })){
            winning_gest = winner_arr[i][2];
            break;
        }
    }

    if (human == winning_gest){

        const currScore = +(playerScore.textContent);
        playerScore.textContent = currScore + 1;
        notiText.innerText += `You win! ${human} beats ${computer}.\n`;
    }
    else{
        const currScore = +(botScore.textContent);
        botScore.textContent = currScore + 1;
        notiText.innerText += `You lose! ${computer} beats ${human}.\n`;
    }

    if (+(playerScore.textContent) == 5){
        winNoti.innerText = "GameOver YOU WON!\n";
        notiText.innerText = '';
        playerScore.textContent = 0;
        botScore.textContent = 0;
    }
    else if(+(botScore.textContent) == 5){
        winNoti.innerText = "GameOver YOU LOSE!\n";
        notiText.innerText = '';
        playerScore.textContent = 0;
        botScore.textContent = 0;
    }
};  


const btns = document.querySelectorAll(".btns > button");
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const usrChoice = getHumanChoice(e.currentTarget.textContent);
        const botChoice = getComputerChoice();
        playRound(usrChoice,botChoice);
    })
})

