import CarData from "../Models/carData";

const addCarToStorage = (carData:CarData)=>{
    //check if localstorage data is exists

    //get all data as array (JSON.parse)
    let allData = JSON.parse(localStorage.getItem("carList") || "");

    //push new car data to array
    allData.push(carData);

    //save the array (JSON.strigify)
    localStorage.setItem("carList",JSON.stringify(allData));
}


export {
    addCarToStorage,
}