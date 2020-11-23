const http = require ('http');      //to set up server, loads http module
const fs = require ('fs');          //to read files     //gets all the modules
const path = require ('path');      //finds files in directory  //"
const server = http.createServer(); //makes the server

const mime = {
    '.html' : 'text/html',
    '.css' :  'text/css',
    '.jpg':   'image/jpeg',
    '.js':    'text/javascript',
    '.svg':   'image/svg+xml',
    '.mp3':   'audio/mpeg'
}


//tells the server what to do when we turn on the website
server.on('request', (request, response) => {    //turns on the server  (request instead of click)
  
    
    if (request.url === '/') {
        response.writeHead(301, {'location': '/index.html'}); //write head redirects to location because 301 is site moved or use setHeader does not need a status code
        response.end();

    } else {    //if not accessing the root, sends you to index.html
        const baseURL = __dirname + request.url       //dirname is directory name
        const source =  fs.createReadStream(baseURL);  //file we are trying to access
        
        
        source.on('open', () => {
            const type = mime[path.extname(baseURL)] || 'text/plain';
            response.setHeader('Content-Type', type); 
            source.pipe(response);
        })
        //content type will set what types of files we are looking for
             //pipe returns what is read by create read stream, take just as much info as you want at a time, not all at once
        source.on('error', () => {
        response.end('Error, can not find site');
         });
    }
});    



server.listen(8000); //makes the server listen


