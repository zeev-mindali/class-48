//check car number : 90645001

import axios from "axios";
import { addCarToStorage } from "../Utils/storageUtil";
import CarData from "../Models/carData";

const CAR_URL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

const addCar = async (
  carNumber: number,
  price: number,
  yad: number,
  km: number
) => {
  //go to data.gov.il and get car info
  let data = (await axios.get(CAR_URL + carNumber)).data.result.records[0];
  //console.log (data);
  
  //create new object (as we wrote in the model)
  let carInfo = new CarData(
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
const soldCar = (carNumber: number) => {};
const searchCarByManufacturer = (manufacturer: string) => {};
const searchCarByPrice = (lowPrice: number, highPrice: number) => {};
const searchCarByModel = (model: string) => {};
const listSoldCar = () => {};

//check methods
addCar(90645001, 40000, 3, 420000);
