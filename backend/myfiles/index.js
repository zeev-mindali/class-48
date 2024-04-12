var http = require('http');
var fs = require('fs');

http.createServer((request,response)=>{
    //read file
    fs.readFile('html/index.html',(err,data)=>{
        //write header , 200 OK code
        response.writeHead(200, {'Content-Type':'text/html'});
        //write the html file to the web server
        response.write(data);
        myLogger2(new Date()+" site was loadded!!\n");
        return response.end();
        
    })
}).listen(8080);

console.log("running on http://localhost:8080");

const myLogger=(data)=>{
    //create a new file, used for system init for the first time
    fs.open('log/myLogger.log','w', (err,file)=>{
        if (err) {
            //write error to error.log
            fs.open('log/error.log',data,(err,file)=>{
                if (err) throw err;
            })
        }
        console.log("add record to the file....");
    });
}

//append to file
const myLogger2=(data)=>{
    fs.appendFile('log/logger.txt',data,(err,file)=>{
        if (err){
            //handle write error to error.log
            console.log(err);
            return;
        }
        console.log('add new record!');
    })
}