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

const updateCarSold = (carNumber:string)=>{
    let allData:CarData[]=[];
    try{ 
        allData = JSON.parse(fs.readFileSync("../Assets/car.data","utf-8"));
    } catch (err){
        allData = [];
    }
    if (allData.length==0){
        return false;
    }

    //find our car by car number as single object
    let singleCar = allData.filter(item=>item.carNumber==carNumber)[0];
    //console.log(singleCar);
    singleCar.sold=true;

    //remove the car that we found, using spread operator for creating a new array.
    allData=[...allData.filter(item=>item.carNumber!=carNumber)];

    console.log(allData);
    //add the car that we found we value sold=true
    allData.push(singleCar);

    //write the entire collection again....
    fs.writeFileSync("../Assets/car.data",JSON.stringify(allData));

    return true;
}

const getCarsByPrice=(lowPrice:number, highPrice:number)=>{
    let allData:CarData[]=[];
    try{ 
        allData = JSON.parse(fs.readFileSync("../Assets/car.data","utf-8"));
    } catch (err){
        allData = [];
    }
    if (allData.length==0){
        return false;
    }   
       
    return [...allData.filter((item)=>{ 
        return item.price>=lowPrice && item.price<=highPrice
     })];
}

const getSoldCars = ()=>{
    let allData:CarData[]=[];
    try{ 
        allData = JSON.parse(fs.readFileSync("../Assets/car.data","utf-8"));
    } catch (err){
        allData = [];
    }
    if (allData.length==0){
        return false;
    }   

    return [...allData.filter((item)=>{ 
        return item.sold==true
     })];
}

export {
    addCarToStorage,
    updateCarSold,
    getCarsByPrice,
    getSoldCars,
}