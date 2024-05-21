import { useEffect } from "react";
import "./hacker.css";
import { useNavigate } from "react-router-dom";
import { store } from "../../redux/store";

function Hacker(): JSX.Element {
    const navigate = useNavigate();
    useEffect(()=>{
        //go to storage and load the data according to jwt :)
        //then check
        if (store.getState().auth.role!=="Admin"){
            navigate("/login");
        }
    },[])
    return (
        <div className="hacker">
			<h1>Gabriel The king</h1>
            <h2>i hacked your system</h2>
        </div>
    );
}

export default Hacker;
