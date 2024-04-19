var express = require('express');
const APP = express();
const PORT = 8080;
const HOST = 'localhost';


APP.get('/', (req,res)=>{
    res.send ("Hello class 48");
})

APP.get('/ilan', (req,res)=>{
    res.send("we attacked in iran and i didn't tell the class, shame on me :(");
})

APP.get('/matti',(req,res)=>{
    let myData = {
        "name":"Matti",
        "badThing": "i gave my dog gamba",
        "badResult": "my dog had a near death experience",
        "liveIn": "Katzir (undefined place)",
        "age" : "depends who you asking, my wife talling me that i am a little child"
    }

    res.send(myData);
})

APP.put('/matti',(req,res)=>{
    let myData = {
        "id": 1,
        "name":"Matti",
        "badThing": "i gave my dog gamba",
        "badResult": "my dog had a near death experience",
        "liveIn": "Katzir (undefined place)",
        "age" : "depends who you asking, my wife talling me that i am a little child"
    }
    res.send(myData);
})

APP.listen(PORT,HOST, ()=>{
    console.log(`http://localhost:${PORT}`);
})