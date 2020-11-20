const fs = require('fs');  //file system has to be here
const phrase = "Why, sometimes I've believed as many as six impossible things before breakfast.";

fs.writeFile('alicequotes.txt', phrase, function(error) {
    if(error){                                  //almost like .addEventListener but makes the new file and then adds the const phrase
        throw error;                            // can also be an arrow function
    } else{
        console.log('File created.');
    }
})