const express = require('express');
const axios = require('axios');

const APP = express();
const HOST = 'localhost';
const PORT = 8080;

//car,bike,truck,handicap,offroad,recall

//endpoints -> data.gov.il
const CAR_URL       = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
const BIKE_URL      = "https://data.gov.il/api/3/action/datastore_search?resource_id=bf9df4e2-d90d-4c0a-a400-19e15af8e95f&q=";
const TRUCK_URL     = "https://data.gov.il/api/3/action/datastore_search?resource_id=cd3acc5c-03c3-4c89-9c54-d40f93c0d790&q=";
const HANDICAP_URL  = "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";
const OFFROAD_URL   = "https://data.gov.il/api/3/action/datastore_search?resource_id=f6efe89a-fb3d-43a4-bb61-9bf12a9b9099&q=";
const RECALL_URL    = "https://data.gov.il/api/3/action/datastore_search?resource_id=36bf1404-0be4-49d2-82dc-2f1ead4a8b93&q=";

APP.get("/car/:id", async(request,response)=>{
    let carData = await axios.get(CAR_URL+request.params.id);
    response.send(carData.data.result.records);
});

APP.get("/bike/:id", async(request,response)=>{
    let carData = await axios.get(BIKE_URL+request.params.id);
    response.send(carData.data.result.records);
});

APP.get("/truck/:id", async(request,response)=>{
    let carData = await axios.get(TRUCK_URL+request.params.id);
    response.send(carData.data.result.records);
});

APP.get("/offroad/:id", async(request,response)=>{
    let carData = await axios.get(OFFROAD_URL+request.params.id);
    response.send(carData.data.result.records);
});

APP.get("/handicap/:id", async(request,response)=>{
    let carData = await axios.get(HANDICAP_URL+request.params.id);
    response.send(carData.data.result.records);
});

APP.get("/recall/:id", async(request,response)=>{
    let carData = await axios.get(RECALL_URL+request.params.id);
    response.send(carData.data.result.records);
});

APP.listen(PORT,HOST,()=>{
    console.log (`http://${HOST}:${PORT} is ready for business`);
})
