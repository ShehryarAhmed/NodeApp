
const EventEmitter = require('events');

function hello(name ){
    console.log('Hello '+name)
}

// setTimeout(() => {
//     hello('Shehryar')
    
// }, 3000);
console.log()

var message = 'food'
// console.log(module)

// var logger = require('./logger')
// logger.log('Bismillah')


//read directory
// const fs = require('fs');
// fs.readdir('./',function(err, files){
//     if(err) console.log('Error',err);
//     else console.log('Result',files)
// });



//Rais an event
// emitter.emit('messageLogged',{ id : 1, url : 'http://'});

const Logger = require('./logger');
const logger = new Logger();
//Register a listner
logger.on('messageLogged', function(arg){
    console.log('Listener Called',arg.id);
    console.log('Listener Called',arg.url);

})

logger.log('message');

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/Name'){
        res.write(JSON.stringify([1,2,3,5]));
        res.end();
    }
});

// server.on('Connection',(socket) => {
//     console.log('New Connection...');
// })

server.listen(3000);
console.log('Listening on Port 5555...');