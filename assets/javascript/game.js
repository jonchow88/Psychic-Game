//The choices available for the computer to choose from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Set default scores to 0

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

// Computer randomly chooses a letter from the array listing all the possible choices
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];


// Set the number of guesses that the user has to 9
var updateGuessesLeft = function() {
	// Grabbing the HTML elements and setting it equal to the number of guessesLeft.
	document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessedLetters = function() {
	// Display user's guesses, separated by a commas
	document.querySelector('#guessedLetters').innerHTML = "Your guesses: " + guessedLetters.join(', ');

};

// Setting the reset function
var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateGuessesLeft();
	updateGuessedLetters();
	updateLetterToGuess();
}

updateLetterToGuess();


// Use onkey to store players guess

document.onkeyup = function() {
		guessesLeft--;
	// Make sure it's a lowercase string
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessedLetters.push(userGuess);
	updateGuessedLetters();
	updateGuessesLeft();

		if (guessesLeft > 0){
			// If player guesses right, WIN (add to win counter)
            if (userGuess === letterToGuess){
                wins++;
                alert("YOU WIN! Was that a fluke or are you really a psychic?!"); 
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();               
        } 

        } else if (guessesLeft == 0){
            // Or else, the player LOSES (add to the L column) 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("TAKE THAT L. The letter was " + letterToGuess + " , better luck next time.");
            reset();
        }    
};