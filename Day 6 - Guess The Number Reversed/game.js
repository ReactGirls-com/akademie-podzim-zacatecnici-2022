// Returns the next computer guess: a number between `minimum` and `maximum` (inclusive).
function guessNumber(minimum, maximum) {
	// return minimum;
	// return maximum;
	// return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return Math.round((minimum + maximum) / 2);
}

window.addEventListener("load", function () {
	// set values of variables expressing the state of the game
	let lowerBoundary = 1;
	let upperBoundary = 100;
	let currentGuess;
	let numberOfGuesses = 0;

	// locate important elements on the page
	let startGameButton = document.querySelector(".start-game");
	let playAgainButton = document.querySelector(".play-again");
	let currentGuessElement = document.querySelector(".current-guess");
	let guessHigherButton = document.querySelector(".guess-higher");
	let guessLowerButton = document.querySelector(".guess-lower");
	let bingoButton = document.querySelector(".bingo");
	let h1Element = document.querySelector("h1");
	let minimumElement = document.querySelector(".minimum");
	let maximumElement = document.querySelector(".maximum");

	// show to the user boundaries for their secret number
	minimumElement.innerHTML = lowerBoundary;
	maximumElement.innerHTML = upperBoundary;

	// Guesses the next number and redraws the playfield.
	function guessAndRedraw() {
		// guess the next number
		currentGuess = guessNumber(lowerBoundary, upperBoundary);
		// increase the counter
		numberOfGuesses = numberOfGuesses + 1;
		// show the guess to the player
		currentGuessElement.innerHTML = currentGuess;
	}

	// event listener for clicking on the "start game" button
	startGameButton.addEventListener("click", function () {
		// change body's class to "during-game", so that we show the playfield (see CSS)
		document.body.className = "during-game";
		// make the first guess
		guessAndRedraw();
	});

	// event listener for clicking on the "play again" button
	playAgainButton.addEventListener("click", function () {
		// reload the whole page, so that we can start from scratch
		window.location.reload();
	});

	// event listener for clicking on the "guess higher" button
	guessHigherButton.addEventListener("click", function () {
		if (currentGuess === upperBoundary) {
			alert("Cheater!!!");
		} else {
			// increase the lower boundary
			lowerBoundary = currentGuess + 1;
			// make the next guess
			guessAndRedraw();
		}
	});

	// event listener for clicking on the "guess lower" button
	guessLowerButton.addEventListener("click", function () {
		if (currentGuess === lowerBoundary) {
			alert("Cheater!!!");
		} else {
			// decrease the upper boundary
			upperBoundary = currentGuess - 1;
			// make the next guess
			guessAndRedraw();
		}
	});

	// event listener for clicking on the "bingo" button
	bingoButton.addEventListener("click", function () {
		// change body's class to "after-game", so that we show only the final result (see CSS)
		document.body.className = "after-game";
		h1Element.innerHTML = `I won and I only needed ${numberOfGuesses} guesses!`;
	});
});
