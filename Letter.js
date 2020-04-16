// constructor function for each letter
var Letter = function(char, beenGuessed) {
    this.character = char;
    this.beenGuessed = beenGuessed;

  
  //function that returns the letter if beenGuessed is true
    this.renderChar = function() {
      
      if (this.beenGuessed === True) {
        return char;
      }
      else {
        return "_";
      }
    };
    //function that takes a character as an argument and checks it against the underlying character and determines if the character has been guessed
    this.checkChar = function(guess){
      if (this.char === guess) {
        beenGuessed = true;
      }
     
    }
  };
  
  // Exporting our Letter constructor. We will require it in word.js
  module.exports = Letter;
  