//web server
var http = require('http');
//file system for writting to logger file
var fs = require('fs');
//handle events
var events = require('events');
//eventEmitter
var eventEmitter = new events.EventEmitter();
const LOGGER_FILE_URL = 'logger/site.log';

const PORT = 8080;

//can be used onyl in type script....
// enum myEvents {
//     "connected","exited","refreshed"
// }

const userEvents = {
	Connected: "Connected",
	Refresh: "Refreshed",
	Logged: "Logged",
	Error: "Gabriel",
    Started: "Started"
}

http.createServer((request,response)=>{
    eventEmitter.emit(userEvents.Started);
    response.end("our web site is up and running");
    //emit event with name - השם של הארוע הוא לבחירת התכנת
    eventEmitter.emit(userEvents.Connected);
}).listen(PORT);

console.log(`server was started: http://localhost:${PORT}`);

//handle new user events
const myConnctedHandler = ()=>{
    console.log("i will make a log....");
    fs.appendFile(LOGGER_FILE_URL,new Date()+"\n",(err,data)=>{
        console.log("new record was created")
    })
}

const startedHandler = ()=>{
    console.log("server is in the air.....");
}

// eventEmitter.on('connected',myConnctedHandler)
eventEmitter.on(userEvents.Connected,myConnctedHandler);
eventEmitter.on(userEvents.Started,startedHandler);