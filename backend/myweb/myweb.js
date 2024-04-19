var http = require("http");
var url = require("url");

var fs = require("fs");
const webPort = 8080;
http.createServer(function (request, response) {
    let query = url.parse(request.url,true).query;    
    fs.readFile(query.lang=='heb'?'index_heb.html':'index_eng.html',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
        return response.end();
    });
    //ההודעה למסך תרוץ קודם, מכיוון שקריאת הקובץ היא אסינכורנית
    //console.log("done reading index.html");
}).listen(webPort);
console.log (`http://localhost:${webPort}`);

/*
let myPeopleGo = data.split(char(13)); // =>convert to line

myPeopleGo[0]
myPeopleGo[1]

let singleData = myPeopleGo[x].split(',');
singleData[0] = id
singleData[1] = name
*/