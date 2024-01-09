//promise => pending=>(fullfield, reject)

//resolve = i have data to give back
//rejected = i have an error (404 not found, 401 unathurazied)

const url =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
const carNumber = "90645001";

const getCatData = new Promise(async (resolve, rejected) => {
  try {
    let data = fetch(url + carNumber);
    resolve(data);
  } catch (err) {
    rejected(err);
  }
});

const getData = async () => {
  var myData = await getCatData;
  console.log((await myData.json()).result.records[0]);
};

console.log(getData());
