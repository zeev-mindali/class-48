var http = require('http');
var fs = require('fs');

let users = [];

let myInfo = {
    "name":"Zeev",
    "age":50,
    "address" : "qiryat yam",
    "password" : "ssshhhhhh",
}

let myInfo2 = {
    "name":"Ilan",
    "age":50,
    "address" : "haifa",
    "password" : "k2",
}

//location of our info file...
const USER_INFO_URL = 'userData/userInfo.txt';

//console.log(myInfo);

http.createServer((request,response)=>{
    users.push(myInfo);
    writeTofile(users)
    //console.log(readInfo());
    users.push(myInfo2);
    writeTofile(users);
    response.end("up and running :)")    
}).listen(8080);
console.log("server at: http://localhost:8080");

const writeTofile = (data)=>{
    fs.writeFile(USER_INFO_URL,JSON.stringify(data), (err,data)=>{
        if (err){
            console.log(err);
        }
        console.log("data was saved...");
    })
}
const readInfo=()=>{    
    fs.readFile(USER_INFO_URL,(err,data)=>{
        if (err){
            console.log(err);
            return;
        }
        //method I
        // let userInfo = JSON.parse(data);
        // console.log(userInfo.name,userInfo.address);

        //method II
        let {name,address} = JSON.parse(data);
        console.log(name,address);
    })
}
