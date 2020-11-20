const fs = require('fs');

fs.readFile ('style.css', 'UTF8', (error, file) =>{
    const data = file;
    //console.log(data);
    numberOfIds(data);
})

function numberOfIds(data){
    let result = data.match(/#/g);  //reg x
    //console.log(result);
    let count = result.length;  //length of the matching #s from data.match
    console.log('Number of IDs in css file:', count);
}
