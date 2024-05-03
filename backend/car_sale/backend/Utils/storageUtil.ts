import CarData from "../Models/carData";
import * as fs from "fs";

const addCarToStorage = (carData:CarData)=>{   
    //get all data as array (JSON.parse)
    let allData:CarData[]=[];
    try{ 
        allData = JSON.parse(fs.readFileSync("../Assets/car.data","utf-8"));
    } catch (err){
        allData = [];
    }
    //check if car already in the system
    for (let index=0;index<allData.length;index++){
        if (allData[index].carNumber == carData.carNumber){
            console.log("we have that car already!!!");
            return;
        }
    }
    allData.push(carData);

    //save the array (JSON.strigify)
    fs.writeFileSync("../Assets/car.data",JSON.stringify(allData));
}


export {
    addCarToStorage,
}