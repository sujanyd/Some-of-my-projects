const card1 = document.getElementsByClassName("card1")[0];
const card2 = document.getElementsByClassName("card2")[0];
const card3 = document.getElementsByClassName("card3")[0];
const result = document.getElementById("pa");


const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        result.textContent = "It's a Draw! 🤝";
    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = "You Win! 🎉 Computer chose " + computerChoice;
    } 
    else {
        result.textContent = "You Lose! 😢 Computer chose " + computerChoice;
    }
}


card1.addEventListener("click", () => {
    playGame("rock");
});

card2.addEventListener("click", () => {
    playGame("paper");
});

card3.addEventListener("click", () => {
    playGame("scissors");
});