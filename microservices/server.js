const express = require('express');
const bodyParser = require("body-parser");

const aboutRoute = require('./routes/about.js');
const weatherRoute = require('./routes/weather.js');

const PORT = 3000;
const HOST_NAME="localhost";

const app = express();
app.use(express.static("client"));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/weather", weatherRoute);
app.use("/about", aboutRoute);



app.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server is running on http://${HOST_NAME}:${PORT}`);
})