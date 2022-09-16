// Get modules
const fs = require("fs");
const path = require("path");
const input = require("./input.json");
const unscramble = require('word-unscrambler');

// Make an array out of the wordlist
const wordlist = fs.readFileSync("./wordlist.txt");
var dict = wordlist.toString().split("\r\n");

// Make empty string
var res_string = "";

// Go through the words
for (const word_scramble of input) {
    unscramble(word_scramble, dict).then(result => {
        res_string += result[0];
        console.log(res_string);
        res_string += ",";
    });
}