//endpoints
const carDataURL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
const carHandicapURL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";

const checkCar = async (carNumber) => {
  //check handicap
  let isHandicap = new Promise((resolve, reject) => {
    try {
      let URLtimeout = setTimeout(() => {
        reject("time out");
      }, 10 * 1000);
      fetch(carHandicapURL + carNumber).then((response) => {
        clearTimeout(URLtimeout);
        resolve(response);
      });
    } catch (err) {
      reject(err);
    }
  });
  //check for car info
  let carInfo = new Promise((resolve, reject) => {
    try {
      let URLtimeout = setTimeout(() => {
        reject("time out");
      }, 10 * 1000);
      let data = fetch(carDataURL + carNumber).then((response) => {
        clearTimeout(URLtimeout);
        resolve(response);
      });
    } catch (err) {
      reject(err);
    }
  });
  try {
    let handiCapData = await (await isHandicap).json();
    let carInfoData = await (await carInfo).json();
    console.log(carInfoData.result.records[0]);
    console.log("======================================================");
    console.log(
      "is handicap car: ",
      handiCapData.result.records[0] !== undefined
    );
  } catch (err) {
    console.log(err);
  }
};

//checkCar(19457);
checkCar(90645001);
//checkCar(1001531);
