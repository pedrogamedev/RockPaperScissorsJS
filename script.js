
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

    const paperBtn = document.querySelector('.paper');

    const scissorsBtn = document.querySelector('.scissors');

// Images

    const playerImg = document.querySelector('#playerMove');
    const pcImg = document.querySelector('#pcMove');

// Text

    const gameText = document.querySelector('.gameAlert')

    const counterPlayer = document.getElementById('winsPerson')

    const counterPC = document.getElementById('winsPC')

//StartGame Button

mainButton.addEventListener('click', () =>
{
    console.log(gameState);
    switch(gameState)
    {
        case "off":
                curRound = 0;
                startGame();
                break;
        case "nextRound":
                updatePC_UI("none");
                updatePlayer_UI("none");
                startGame();
                break;
        case "end":
        {
            pcWins = 0;
            playerWins = 0;
            curRound = 0;
            updatePC_UI("none");
            updatePlayer_UI("none");
            startGame();
            break;
        }
    }
});

//Game logic

    function startGame()
    {
        gameText.innerText = "Select your move";
        gameState = "playerChoice";
    }

    //pegando o input do player


            rockBtn.addEventListener('click', () =>
            {
                if(gameState == "playerChoice")
                {
                    playerSelection = "rock";
                    updatePlayer_UI(playerSelection);
                    playRound();
                }

            });
            paperBtn.addEventListener('click', () =>
            {
                if(gameState == "playerChoice")
                {
                    playerSelection = "paper";
                    updatePlayer_UI(playerSelection);
                    playRound();
                }
            });
            scissorsBtn.addEventListener('click', () =>
            {
                if(gameState == "playerChoice")
                {
                    playerSelection = "scissors";
                    updatePlayer_UI(playerSelection);
                    playRound();
                }
            });

    function playRound()
    {
        gameState = "pcChoice";


        computerSelection = getComputerChoice();

        updatePC_UI(computerSelection);

        gameState = "round";


        if(playerSelection === computerSelection)
        {
            gameText.innerText = "Tie! Press the button to start the next round!";
        }
        
        switch(computerSelection)
        {
            case "scissors":
            {
                if(playerSelection == "paper")
                {
                    gameText.innerText = "PC won! Press the button to start next round!";

                    pcWins += 1;
                }
                else
                {
                    gameText.innerText = "You won! Press the button to start next round!";

                    playerWins += 1;
                }
                break;
            }
            case "rock":
            {
                if(playerSelection == "scissors")
                {
                    gameText.innerText = "PC won! Press the button to start next round!";

                    pcWins += 1;
                }
                else
                {
                    gameText.innerText = "You won! Press the button to start next round!";

                    playerWins += 1;
                }
                break;
            }
            case "paper":
            {
                if(playerSelection == "rock")
                {
                    gameText.innerText = "PC won! Press the button to start next round!";

                    pcWins += 1;
                }
                else
                {
                    gameText.innerText = "You won! Press the button to start next round!";

                    playerWins += 1;
                }                
                break;
            }
        }

        curRound +=1;
        UpdateCounter();
        nextRound();
    }

    function nextRound()
    {
        if(curRound < 5)
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
        if(playerWins > pcWins)
        {
            gameText.innerText = "You won the game! Press the button to restart";

        }
        else if(pcWins > playerWins)
        {
            gameText.innerText = "PC won the game! Press the button to restart";

        }
        else
        {
            gameText.innerText = "A Tie! Press the button to restart the game";
        }
        gameState = "end";
    }


//Game Logic - choices

function getComputerChoice()
{
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum)
    {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
    }   
}


//UI logic
function updatePC_UI(choice)
{
    switch(choice)
    {
            case "paper":
                pcImg.src = "icons/paper.svg"
                break;
            case "rock":
                pcImg.src = "icons/rock.svg"
                break;
            case "scissors":
                pcImg.src = "icons/scissors.svg"
                break;
            default:
                pcImg.src = "icons/default.svg"
                break;
    }
}

function updatePlayer_UI(choice)
{
    switch(choice)
    {
        case "paper":
            playerImg.src = "icons/paper.svg"
            break;
        case "rock":
            playerImg.src = "icons/rock.svg"
            break;
        case "scissors":
            playerImg.src = "icons/scissors.svg"
            break;
        default:
            playerImg.src = "icons/default.svg"
            break;
    }
}


function UpdateCounter()
{
    counterPlayer.innerText= "You won " + playerWins + " games!";

    counterPC.innerText= "PC has won " + pcWins + " games!";
}


