import { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";

function MainPage(): JSX.Element {
    const [prod,setProd] = useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:8080/api/products")
        .then (response => response.data)
        .then (data=>setProd(data));
    },[])
    return (
        <div className="MainPage">
            {prod.length>0 && prod.map(item=>
                <>
                    <div className="Box" key={item["id"]}>
                        <h2>{item["name"]}</h2><br/><hr/>
                        {item["price"]}<br/>
                        {item["qty"]}<hr/>
                        {item["time"]}
                    </div>
                </>
            )}
        </div>
    );
}

export default MainPage;

/*
    	Welcome to our REACT project<br/><br/>
            our best studet is:{bestStudent}  and complicated one is: {complicatedStudent}
            <hr/>
            devices {devices} / total {total}<br/><br/>
            <div className="Box">
                Today we are eating {isWeekend?weekend:normalDay}<br/><br/>
                {isWeekend && weekendMessage}
            </div>
            {isWeekend && <Ofir/>}<br/><br/>
            {studentsInClass.map(item=><span key={item.id}>{item.name} | </span>)}
*/
