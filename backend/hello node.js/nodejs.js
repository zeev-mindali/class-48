var http = require('http'); //קריאה לספריית הווב
const webServerPort = 8080;

http.createServer(function (req,res){
    //הודעה איזה סוג דף אני הולך להעביר
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h1>Hello Class 48</h1>');
}).listen(webServerPort);

console.log(`web server is up and running`);
console.log(`you can view the page http://localhost:${webServerPort}`);

