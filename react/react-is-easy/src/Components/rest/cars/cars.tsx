import { SyntheticEvent, useState } from "react";
import "./cars.css";
import axios from "axios";

function Cars(): JSX.Element {
    //we are going to AXIOS
    //to install axios -> npm install axios
    const [lp,setLp] = useState("");
    const carURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

    const updateLP = (e:SyntheticEvent)=>{
        setLp((e.target as HTMLInputElement).value.replace("-",""));
    }

    const searchTheCar = async()=>{
        //going to check the internet :)
        const carData = await axios.get(carURL+lp);
        console.log(carData.data.result.records[0]);
    }

    return (
        <div className="cars">
			<div className="Box">
                <h1>Car LP</h1>
                <input type="text" placeholder="car number" onChange={updateLP}/>
                <input type="button" value="search" onClick={searchTheCar}/>
            </div>
            <div>
                Car Details:
            </div>
        </div>
    );
}

export default Cars;
