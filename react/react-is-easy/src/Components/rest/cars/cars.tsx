import { SyntheticEvent, useState } from "react";
import "./cars.css";
import axios from "axios";
import { Car } from "../../../model/Car";
import SingleCar from "../singleCar/singleCar";

function Cars(): JSX.Element {
    //we are going to AXIOS
    //to install axios -> npm install axios
    const [lp,setLp] = useState("");
    const [carInfo,setInfo] = useState<Car>();
    const [totalCars,setTotalCars] = useState(0);
    const [myCars,setMyCar] = useState<Car[]>([]);

    // אני לא עצלן    
    // const [baalut,setBaalut] = useState("");
    // const [tozeret_nm,setTozeret] = useState("");
    // const [kinuy_mishari, setKinuy] = useState("");
    // const [sug_delek_nm,setDelek] = useState("");

    const carURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
    const severlCarURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit="
    const updateLP = (e:SyntheticEvent)=>{
        setLp((e.target as HTMLInputElement).value.replace("-",""));
    }

    const setTotal = async(e:SyntheticEvent)=>{
        setTotalCars(parseInt((e.target as HTMLInputElement).value));
    }

    const searchTheCar = async()=>{
        //going to check the internet :)
        const carData = await axios.get(carURL+lp);
        //console.log(carData.data.result.records[0].baalut);
        const carResult = carData.data.result.records[0];
        //setInfo(JSON.stringify(carData.data.result.records[0]));
        // setBaalut(carResult.baalut);
        // setTozeret(carResult.tozeret_nm);
        // setKinuy(carResult.kinuy_mishari);
        // setDelek(carResult.sug_delek_nm);
        setInfo(new Car(carResult.baalut,carResult.tozeret_nm,carResult.kinuy_mishari,carResult.sug_delek_nm,carResult.mispar_rechev));
    }

    const searchForCars = async()=>{
        let carArray = [];
        const carData = await axios.get(severlCarURL+totalCars);
        const carResult = carData.data.result.records;
        for (let index=0;index<carResult.length;index++){
            carArray.push(new Car(carResult[index].baalut,carResult[index].tozeret_nm,carResult[index].kinuy_mishari,carResult[index].sug_delek_nm,carResult[index].mispar_rechev))
        }
        setMyCar(carArray);
    }

    return (
        <div className="cars">
			<div className="Box">
                <h1>Car LP</h1>
                <input type="number" placeholder="total cars" onChange={setTotal}/>
                <input type="button" value="search" onClick={searchForCars}/>
            </div>
            <hr/><hr/>
            {/* <div>                
                Car Details:<br/>
                baalut: {carInfo?.baalut}<br/>
                tozeret_nm: {carInfo?.tozeret_nm}<br/>
                kinuy_mishari:{carInfo?.kinuy_mishari}<br/>
                sug_delek_nm:{carInfo?.sug_delek_nm}<br/>
               
            </div> */}
            {
                myCars.map(item=><SingleCar key="1" baalut={item.baalut} tozeret_nm={item.tozeret_nm} 
                kinuy_mishari={item.kinuy_mishari} sug_delek_nm={item.sug_delek_nm} mispar_rechev={item.mispar_rechev}/>)
            }
        </div>
    );
}

export default Cars;
