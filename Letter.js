// constructor function for each letter
var Letter = function(char) {
    this.char = char;
    this.beenGuessed = false;

  
  //function that returns the letter if beenGuessed is true
  
    //function that takes a character as an argument and checks it against the underlying character and determines if the character has been guessed
    this.checkChar = function(guess){
      if (this.char === guess) {
        this.beenGuessed = true;
      }
     
    }
  };
  Letter.prototype.toString = function() {
      
    if (this.beenGuessed === false) {
      return this.char;
    }
    else {
      return "_";
    }
  };
  // Exporting our Letter constructor. We will require it in word.js
  module.exports = Letter;
  