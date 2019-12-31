const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        //send an Http request
        console.log(message);
        //Rais an event 
        this.emit('messageLogged',{ id:1,url : 'http://' });
    }
}

// function log(msg) {
//     console.log(msg)
// }

module.exports = Logger;   