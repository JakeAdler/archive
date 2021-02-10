var wins = $("#wins");
var winsNum = 0;
var winsNum = 0;
var losses =$("#losses");
var lossesNum = 0; 
var guessesLeft = $("#guessesLeft");
var guessesLeftNum = 10;
var guessesUsed = $("#guessesUsed");
var guessesArr = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter;
function getRandomLetter(){
  randomLetter = alphabet[Math.floor(Math.random()* 26)]
}
getRandomLetter();




$(document).keypress(function(event){
    if(guessesArr.length < 10){
    if(String.fromCharCode(event.which)=== randomLetter){
        alert("You Win! Letter was " + randomLetter)
        winsNum += 1
        wins.text(winsNum)
        getRandomLetter()
        guessesArr = [];
        guessesUsed.text("")
        guessesLeftNum = 10;
        guessesLeft.text(guessesLeftNum);
    } else {
        guessesUsed.append(String.fromCharCode(event.which) + ", ")
        guessesArr.push(String.fromCharCode(event.which));
        guessesLeftNum -= 1;
        guessesLeft.text(guessesLeftNum)
    };
} else {
    alert("You lose! Letter was " + randomLetter)
    lossesNum += 1;
    losses.text(lossesNum);
    getRandomLetter()
    guessesArr = [];
    guessesUsed.text("")
    guessesLeftNum = 10;
    guessesLeft.text(guessesLeft);
}
  });