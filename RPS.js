alert("---ROCK PAPER SCISSOR GAME\n");

const ref_arr = ["rock", "paper", "scissors"];

let choice = "";

const winner_arr = [["rock", "paper", "paper"], ["rock", "scissors", "rock"], ["scissors", "paper", "scissors"]];


let humanScore = 0, computerScore = 0;

function score_clear(){
    humanScore = 0;
    computerScore = 0;
}

const getComputerChoice = () => {
    let int_res = Math.floor(Math.random() * 3);
    return ref_arr[int_res];
};

const getHumanChoice = () => {
    do {
        choice = prompt("Please Place Your Bet.");
        choice = choice ? choice.toLowerCase() : -1;
    } while(ref_arr.indexOf(choice) == -1);

    return choice;
};


const playRound = (human, computer) => {
    let res_str = "";
    let winning_gest = "";
    if (human == computer){
        res_str += `You guys both bet ${human} that's a draw.\nYour score: ${humanScore}, Computer Score: ${computerScore}.\n`;
        alert(res_str);
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
        humanScore ++;
        res_str += `You win! ${human} beats ${computer}.\nYour score: ${humanScore}, Computer Score: ${computerScore}.\n`;
        alert(res_str);
    }
    else{
        computerScore ++;
        res_str += `You lose! ${computer} beats ${human}.\nYour score: ${humanScore}, Computer Score: ${computerScore}.\n`;
        alert(res_str);
    }

};  

function play5Round(){
    do {
        score_clear();
        for (let i = 0; i < 5; i ++){
            alert(`GAME ${i+1} !`);
            const humansele = getHumanChoice();
            const compsele = getComputerChoice();
            playRound(humansele, compsele);
        }

        if (humanScore == computerScore) alert(`YOU DRAW WITH BOT! Both scores ${humanScore}.`);
        else if (humanScore > computerScore) alert(`YOU WIN! UR SCORE: ${humanScore}, BOT SCORE: ${computerScore}.`);
        else alert(`YOU LOSE! UR SCORE: ${humanScore}, BOT SCORE: ${computerScore}.`);
    } while (confirm("Play Again?"));
}

play5Round();



