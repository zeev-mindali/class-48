//promise states : pending=>(fullfield, rejected)

const url =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
//const carNumber = "90645001";

//old school
//var carData = fetch(url + carNumber).then((result) => console.log(result));

const carData = async (carNumber) => {
  //get data from url
  var carDataResult = await fetch(url + carNumber);
  //get body by redirecting it as json, can take some time (also await)
  carDataResult = await carDataResult.json();
  //print the data
  console.log(carDataResult.result.records[0]);
};

carData("90645001");
console.log("Fetching car data");
//console.log(carData);
