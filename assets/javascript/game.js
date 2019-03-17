// declare three global variables

// Create an array of words
var WORDS = [
    "rat",
    "pig",
    "cat",
    "dog"
];

var word="";

var answerArray = [];

function init(){
    // This will pick a random word
    word = WORDS[Math.floor(Math.random() * WORDS.length)];
    // setting up the answer array
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    document.getElementById("answer").innerHTML= answerArray.join(" ");
    document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
  }
  init();

  function guessOne() {
    // player guesses
    var guess = document.getElementById("guess").value;
    var showThisMessage = "";

  if (guess.length !== 1) {
      showThisMessage ="Please enter only a single letter";
  } else {
        // Update the game with player guess
        var i=0;
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                showThisMessage = "YES! "+guess+" is in the answer";
            }
        }

        var remaining_letters = answerArray.length;

        for (i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

        if (remaining_letters == 0) {
            showThisMessage = "YES! You guessed the word";
        }

        if (showThisMessage === "") {
            showThisMessage = "Sorry, no "+guess;
        }

        document.getElementById("answer").innerHTML = answerArray.join(" ");

        // clears out their last guess
        document.getElementById("guess").value = "";
  }
  document.getElementById("message").innerHTML = showThisMessage;
}
