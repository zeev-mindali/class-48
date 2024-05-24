import { useEffect } from "react";
import { checkJWT } from "../../utils/JWT";
import "./MainPage.css";

function MainPage(): JSX.Element {
    useEffect(()=>{
        checkJWT();
    },[])
    
    return (
        <div className="MainPage">
			<h1>Class 48 - the best that lecturer can get...</h1>
        </div>
    );
}

export default MainPage;
