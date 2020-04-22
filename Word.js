var Letter = require("./Letter.js");

var Word = function(word) {
    
    this.wordArray=[];  
    
    this.populateArray = function (){
        for (i=0;i<word.length;i++){
            var char = new Letter(word.charAt(i));
            
            this.wordArray.push(char);
            
        }
        
    }
    this.displayWord = function(){
      console.log(this.wordArray.join(""));
      
    }
    this.checkAll = function(guess){
        for (i=0;i<this.wordArray.length;i++){
            this.wordArray[i].checkChar(guess);
        }
    }
    
}

module.exports = Word;