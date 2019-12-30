function hello(name ){
    console.log('Hello '+name)
}

setTimeout(() => {
    hello('Shehryar')
    
}, 3000);
console.log()

var message = 'food'
console.log(module)

var logger = require('./logger')
logger.log('Bismillah')


//read directory
const fs = require('fs');
fs.readdir('$',function(err, files){
    if(err) console.log('Error',err);
    else console.log('Result',files)
});
