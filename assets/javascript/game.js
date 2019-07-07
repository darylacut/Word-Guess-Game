// variables for displaying to html
var chosenWord = document.getElementById("chosenWord-text");
var tries = document.getElementById("tries-text");
var score = document.getElementById("score-text");
var totalLetters = document.getElementById("totalLetters-text");

alert("Welcome to the word guessing game!");

// game starts 

// variables declared
// score = 0
// tries = 0
// game chooses random word from array of words

var randomWord = ["life", "strange", "choices"];
var tries = 0;
var score = 0;

var chosenWord = randomWord[Math.floor(Math.random() * randomWord.length)];

// game displays underlines corresponding to total number of letters of chosen word
var totalLetters = [];
for (var i = 0; i < chosenWord.length; i++) {
    totalLetters[i] = "_";
}

var tries = chosenWord.length;

// player inputs random letter
document.onkeyup = function(event){
    var letterInput = event.key;
    alert("you typed " + letterInput);
}

// if letter has been typed before
    

    // guesses remain unchanged

// if letter is valid
    // guesses  - 1
    // replace corresponding underlines with corresponding letter


// else 
    // guesses -1 
    // underlines remain the same

// loop until
    // all letters are guessed 
            // score + 1
            // word thought by computer is refreshed 
            // underlines are refreshed

    // or no guesses = 0
            // score remains unchanged
            // word though by computer is refreshed
            // underlines refreshed


            // loop until no more words in computer reserve. 
