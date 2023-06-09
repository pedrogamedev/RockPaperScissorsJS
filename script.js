function getComputerChoice()
{
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum)
    {
        case 0:
        {
            return "paper";
        }
        case 1:
        {
            return "rock";
        }
        case 2:
        {
            return "scissors";
        }
    }
}
function getPlayerChoice(choice)
{
    choice = prompt("insert you choice!");
    choice = choice.toLowerCase();

    if(choice == "rock" || choice == "paper" || choice == "scissors")
    {
        return choice;
    }
    else
    {
        console.log("please insert a correct value");
        choice = undefined;
        return choice = getPlayerChoice();
    }
}

function playRound()
{
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();


    if(playerSelection === computerSelection)
    {
        return "empate!";
    }
    
    switch(computerSelection)
    {
        case "scissors":
        {
            if(playerSelection == "paper")
            {
                return "you lose!";
            }
            else
            {
                return "you win!";
            }
        }
        case "rock":
        {
            if(playerSelection == "scissors")
            {
                return "you lose!";
            }
            else
            {
                return "you win!";
            }
            }
        case "paper":
        {
            if(playerSelection == "rock")
            {
                return "you lose!";
            }
            else
            {
                return "you win!";
            }
        }
        case "scissors":
        {
            if(playerSelection == "paper")
            {
                return "you lose!";
            }
            else
            {
                return "you win!";
            }
        }
    }
}
function game()
{
    for(i = 0; i<=4; i++)
    {
        console.log(playRound());
    }
}

