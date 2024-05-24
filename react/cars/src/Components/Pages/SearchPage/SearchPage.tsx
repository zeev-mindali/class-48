import { useNavigate, useParams } from "react-router-dom";
import "./SearchPage.css";
import { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "../SingleItem/SingleItem";
import { Car } from "../../model/Car";
import { store } from "../../redux/store";
import { checkJWT } from "../../utils/JWT";

function SearchPage(): JSX.Element {
  //list of url from data.gov.il
  const URL_CAR =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
  const URL_BIKE = "";
  const URL_TRUCK = "";
  const URL_OFFROAD = "";
  const RESULT_LIMIT = 10;
  const { vechileType } = useParams();
  const [myVtype, setVtype] = useState(vechileType);
  const [carData, setData] = useState("");
  //useState setResult
  const [carResult, setResult] = useState<Car[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    //console.log("check jwt:",checkJWT())
    if (!checkJWT()){
        navigate("/login");
    }
  }, []);

  const getData = () => {
    switch (myVtype) {
      case "car":
        break;
      case "bike":
        break;
      case "truck":
        break;
      case "offroad":
        break;
    }
  };

  const handleTextChange = (args: SyntheticEvent) => {
    let mySearch = (args.target as HTMLInputElement).value;
    setData(mySearch);
  };
  const handleSearch = () => {
    axios.get(URL_CAR + carData).then((res) => {
      let myData: Car[] = [];
      let myResponse = res.data.result.records;      
      for (let index = 0; index < myResponse.length; index++) {
        console.log(myResponse[index]);
        myData.push(
          new Car(
            myResponse[index].baalut,
            myResponse[index].tozeret_nm,
            myResponse[index].kinuy_mishari,
            myResponse[index].sug_delek_nm,
            myResponse[index].mispar_rechev
          )
        );
      }
      setResult(myData);
    });
  };
  return (
    <div className="SearchPage">
      {myVtype} locator
      <br />
      <hr />
      <div className="Box">
        <input type="text" onChange={handleTextChange} />
        <input type="button" value={"search"} onClick={handleSearch} />
      </div>
      <hr />
      {carResult.map((item, index) => (
        <SingleItem key={index} carItem={item} />
      ))}
    </div>
  );
}

export default SearchPage;
