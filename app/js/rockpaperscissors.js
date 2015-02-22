////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}	
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
	switch (playerMove) {
    
    case 'rock':
    	switch (computerMove) {
    	case 'rock':
    		return 'tie';
    	case 'paper':
    		return 'computer';
    	case 'scissors':
    		return 'player';
    	default:
    		return 'error';
    		}
    	break;
    case 'paper':
    	switch (computerMove) {
    	case 'rock':
    		return 'player';
    	case 'paper':
    		return 'tie';
    	case 'scissors':
    		return 'computer';
    	default: 
    		return 'error';
    	    
    	}    
    		break;

    case 'scissors':
    	switch (computerMove) {
    	case 'rock':
    		return 'computer';
    	case 'paper':
    		return 'player';
    	case 'scissors':
    		return 'tie';
    	default:
    		return 'error';
    		}
    	break;
    	}
}

function playToFive() {
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */    
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
    	var playerMove = getPlayerMove();
    	var computerMove = getComputerMove();
    	console.log("Computer move: " + computerMove);
    	var winner = getWinner(playerMove,computerMove);
    	if (winner === 'computer') {
    		computerWins += 1;
    		console.log("computer wins!");
    	} else if (winner === 'player') {
    		playerWins += 1;
    		console.log("player wins!");
    	} else if (winner === 'tie') {
    		console.log("tie, no winner");
    	} else {
    		console.log("something went wrong here...");
    	}
    }
}

function playTo(x) {
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */    
    console.log("Let's play Rock, Paper, Scissors");
    var playToNumber = x;
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < playToNumber && computerWins < playToNumber) {
    	var playerMove = getPlayerMove();
    	var computerMove = getComputerMove();
    	console.log("Computer move: " + computerMove);
    	var winner = getWinner(playerMove,computerMove);
    	if (winner === 'computer') {
    		computerWins += 1;
    		console.log("computer wins!");
    	} else if (winner === 'player') {
    		playerWins += 1;
    		console.log("player wins!");
    	} else if (winner === 'tie') {
    		console.log("tie, no winner");
    	} else {
    		console.log("something went wrong here...");
    	}
    }
    console.log("That's all, folks!");
    return [playerWins, computerWins];
}

playTo(3);