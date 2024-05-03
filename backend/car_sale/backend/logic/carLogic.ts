//check car number : 90645001

import axios from "axios";
import { addCarToStorage, getCarsByPrice, getSoldCars, updateCarSold } from "../Utils/storageUtil";
import CarData from "../Models/carData";

const CAR_URL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

const addCar = async (
  carNumber: string,
  price: number,
  yad: number,
  km: number
) => {
  //go to data.gov.il and get car info
  let data = (await axios.get(CAR_URL + carNumber)).data.result.records[0];
  //console.log (data);
  
  //create new object (as we wrote in the model)
  let carInfo = new CarData(
    carNumber,
    data["tozeret_nm"],
    data["tokef_dt"],
    data["tzeva_rechev"],
    data["sug_delek_nm"],
    data["kinuy_mishari"],
    price,
    yad,
    km,
    data["shnat_yitzur"]
  );
  //console.log(carInfo);

  //add car info to our local storage.
  addCarToStorage(carInfo);
};
const soldCar = (carNumber: string) => {
    return updateCarSold(carNumber);
};
const searchCarByPrice = (lowPrice: number, highPrice: number) => {
    return getCarsByPrice(lowPrice,highPrice);
};
const searchCarByManufacturer = (manufacturer: string) => {};

const searchCarByModel = (model: string) => {};
const listSoldCar = () => {
    return getSoldCars();
};

//check methods
// check => addCar("90645001", 40000, 3, 420000);
// check => soldCar("90645001");
// check => console.log(searchCarByPrice(40000,40000));
console.log(listSoldCar());