
		
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

if (response.status === 'connected') {
    // Logged into your app and Facebook.
    
     


document.onkeyup = function(event) {

     var guess = event.key;

     var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

     var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(guess) != -1) {

        if (guess === compGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
        }

        if (guess != compGuess) {
            numGuesses --;
            guessChoices.push(guess);
        }

        if (numGuesses === 0) {

        numGuesses = 9;
        losses ++;
        guessChoices = [];
        }

        var html = 
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numGuesses + "</p>" +
        "<p>Your Guesses so far: " + guessChoices.join() + "</p>";

        document.querySelector("#game").innerHTML = html;

    }
};

} else {
    // The person is not logged into your app or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  }


