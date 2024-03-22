import { useParams } from "react-router-dom";
import "./SearchPage.css";
import { useState } from "react";

function SearchPage(): JSX.Element {
    //list of url from data.gov.il
    const URL_CAR="";
    const URL_BIKE="";
    const URL_TRUCK="";
    const URL_OFFROAD="";

    const [myVtype,setVtype] = useState("");
    const params = useParams();
    const vType = params.vechileType?.toLowerCase()||"car";
    
    setVtype(vType);
    const getData = ()=>{
        switch(vType){
            case "car":

            break;
            case "bike":

            break;
            case "truck":

            break;
            case "offroad":

            break;
        }
    }

    return (
        <div className="SearchPage">
			Car locator<br/><hr/>
            <div className="Box">

                <input type="text" /><input type="button" value={"search"}/>
            </div>
        </div>
    );
}

export default SearchPage;
