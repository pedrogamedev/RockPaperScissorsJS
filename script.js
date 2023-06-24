
let playerWins = 0;
let pcWins = 0;

let curRound = 0;

let gameState = "off";

let playerSelection = undefined;
let computerSelection = undefined;

//DOM elements
// Buttons
const mainButton = document.querySelector('.buttonMain');

//  Player Buttons
    const rockBtn = document.querySelector('.rock');

    const paperBtn = document.querySelector('.rock');

    const scissorsBtn = document.querySelector('.rock');

// Images


//StartGame Button

mainButton.addEventListener('click', () =>
{
    console.log(gameState);
    switch(gameState)
    {
        case "off":
            {
                curRound = 0;
                startGame();
            }
        case "nextRound":
            {
                updatePC_UI("none");
                updatePlayer_UI("none");
                startGame();
            }
        case "end":
            {

            }
    }
});

//Game logic

    function startGame()
    {
        console.log("hello litle stylus")
        gameState = "playerChoice";
    }

    //pegando o input do player

        if(gameState == "playerChoice")
        {
            rockBtn.addEventListener('click', () =>
            {
                playerSelection = "rock";
                updatePlayer_UI(playerSelection);
                playRound();

            });
            paperBtn.addEventListener('click', () =>
            {
                playerSelection = "paper";
                updatePlayer_UI(playerSelection);
                playRound();
            });
            scissorsBtn.addEventListener('click', () =>
            {
                playerSelection = "scissors";
                updatePlayer_UI(playerSelection);
                playRound();
            });
        }

    function playRound()
    {
        gameState = "pcChoice";


        computerSelection = getComputerChoice();

        gameState = "round";


        if(playerSelection === computerSelection)
        {
            console.log("empate!");
        }
        
        switch(computerSelection)
        {
            case "scissors":
            {
                if(playerSelection == "paper")
                {
                    pcWins += 1;
                }
                else
                {
                    playerWins += 1;
                }
            }
            case "rock":
            {
                if(playerSelection == "scissors")
                {
                    pcWins += 1;
                }
                else
                {
                    playerWins += 1;
                }
            }
            case "paper":
            {
                if(playerSelection == "rock")
                {
                    pcWins += 1;
                }
                else
                {
                    playerWins += 1;
                }
            }
        }

        round +=1;
        nextRound();
    }

    function nextRound()
    {
        if(round < 5)
        {
            computerSelection = undefined;
            playerSelection = undefined;

            gameState = "nextRound";
        }
        else
        {
            endGame();
        }

    }

    function endGame()
    {

    }


//Game Logic - choices

function getComputerChoice()
{
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum)
    {
        case 0:
        {
            computerSelection = "paper";
        }
        case 1:
        {
            computerSelection =  "rock";
        }
        case 2:
        {
            computerSelection = "scissors";
        }
    }   

    updatePC_UI(computerSelection);
}


//UI logic
function updatePC_UI(choice)
{

    if(choice == "paper")
    {

    }
    else if(choice == "rock")
    {

    }
    else if (choice == "scissors")
    {

    }
    else
    {

    }
}

function updatePlayer_UI(choice)
{
    if(choice == "paper")
    {

    }
    else if(choice == "rock")
    {

    }
    else if (choice == "scissors")
    {

    }
    else
    {
        
    }
}


function UpdateCounter()
{
    const counterPlayer = document.getElementById('winsPerson')
    counterPlayer.innerText= "You won " + playerWins + " games!";

    const counterPC = document.getElementById('winsPC')
    counterPC.innerText= "PC has won " + playerWins + " games!";

}


