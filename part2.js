const fs = require('fs');

fs.readFile('alicequotes.txt', 'UTF8', (error, file) => {
    console.log(file);
})                              //also .addEvLi but makes a readable file then pulls the text file
                                //UTF8 is required!!!