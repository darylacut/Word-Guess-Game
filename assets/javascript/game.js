debugger;



alert("Welcome to the word guessing game!");

// game starts 

// variables declared
// score = 0
// tries = 10
// game chooses random word from array of words
var tries = 10;
var score = 0;



// variables for displaying to html
var chosenWord = document.getElementById("chosenWord-text");
var tries = document.getElementById("tries-text");
var score = document.getElementById("score-text");
var wordLetters = document.getElementById("wordLetters-text");

var randomWord = ["life", "strange", "choices"];
var chosenWord = randomWord[Math.floor(Math.random() * randomWord.length)];
 
// game displays underlines corresponding to total number of letters of chosen word
var wordLetters = [];
for (var i = 0; i < chosenWord.length; i++) {
    console.log(wordLetters[i] = "_");
}
 // determine how many more blank letters left
var blankLetters = chosenWord.length;

// player inputs random letter
document.onkeyup = function () {
    var letterInput = event.key;

// if letter is valid
    // remaining tries - 1
    // blank letters - 1
    // replace corresponding underlines with corresponding letter
// if letter has been typed before, guesses should remain unchanged

    for (var l = 0; l < chosenWord.Length; l++) {
        if (chosenWord[l] === letterInput) {
           console.log (wordLetters[l] = letterInput);
           tries--;
           blankLetters--;
        }

        else {
            tries--;

        }
    }

}

// else 
    // remaning tries -1 
    // underlines remain the same

// loop until
    // all letters are guessed 
            // score + 1
            // word thought by computer is refreshed 
            // underlines are refreshed

    // or no guesses = 0
            // score remains unchanged
            // word thought by computer is refreshed
            // underlines refreshed


            // loop until no more words in computer reserve
