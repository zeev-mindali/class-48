//imported required modules
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

//create express
const app = express();

//create http server
const server = http.createServer(app);

//initialize socket.io
const io = socketIo(server);

//io => WebSocket depends on events....
io.on('connection', (socket) => {
    console.log('a user connected');

    //listen for incoming chat messages
    socket.on('chat message', (msg) => {
        console.log(`received message: ${msg}`);
        //broadcast the message to all connected clients
        io.emit('chat message', msg);
    });

    //listen for disconnection
    socket.on('disconnect', () => {
        console.log("user disconnected");
    })
});



//serve static files from the public directory
app.use(express.static(__dirname + "/public"));

//Define a route to server index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
}
)


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server is on port:${PORT}`);
})