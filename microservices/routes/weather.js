const express = require('express');
const http = require('http');

const weatherRoute = express.Router();

weatherRoute.get("/",(req,res)=>{
        console.log(__dirname+"/index.html");
        res.sendFile(__dirname + "/index.html");
        //res.sendFile("./index.html");
    }
);

weatherRoute.post("/",(req,res)=>{
    const city = req.body.cityName;
    const apiKey = "00b3b30cce8d4681b19160421240608";

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    http.get(url, (response)=>{
        response.on("data", (myData)=>{
            const responseData = JSON.parse(myData);
            console.log(responseData);
            const temperature = responseData.current.temp_c;
            const weatherDes = responseData.current.condition.text;
            const icon = "https:"+responseData.current.condition.icon;
            res.write(`<h1>the wather is ${temperature} degree celisuis in ${city} and it's ${weatherDes}</h1>`);
            res.write(`<img src="${icon}"/>`);
            res.send();
        });
    });
})

module.exports = weatherRoute;