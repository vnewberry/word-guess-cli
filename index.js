//need prompt or inquirer
//needchalk and figlet
var Word = require("./Word.js");
var inquirer = require("inquirer");
var wordList = ["SPINOSAURUS","PTERODACTYL","IGUANADON","DIPLODOCUS","ANKYLOSAURUS","TYRANNOSAURUS","VELOCIRAPTOR","BRACHIOSAURUS","DILOPHOSAURUS","OVIRAPTOR",""]
var curWord="";
function start(){
    selectWord();
 
    
    curWord.displayWord();
}
start();
function selectWord(){
    var selector = Math.floor(Math.random()*10);
    curWord = new Word(wordList[selector]);
    curWord.populateArray();
}
