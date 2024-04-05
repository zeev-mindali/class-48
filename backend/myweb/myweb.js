var http = require("http");
var fs = require("fs");
const webPort = 8080;
http.createServer(function (request, response) {
    fs.readFile('index.html',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
        return response.end();
    });
    //ההודעה למסך תרוץ קודם, מכיוון שקריאת הקובץ היא אסינכורנית
    //console.log("done reading index.html");
}).listen(webPort);
console.log (`http://localhost:${webPort}`);
