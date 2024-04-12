var http = require('http');
var fs = require('fs');

http.createServer((request,response)=>{
    response.end("up and running :)")
}).listen(8080);
console.log("server at: http://localhost:8080");

let myInfo = {
    "name":"Zeev",
    "age":50,
    "address" : "qiryat yam",
    "password" : "ssshhhhhh",
}
console.log(myInfo);