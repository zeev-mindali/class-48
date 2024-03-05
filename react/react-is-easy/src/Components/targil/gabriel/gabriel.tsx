import { SyntheticEvent, useState } from "react";
import "./gabriel.css";

function Gabriel(): JSX.Element {
    const [victimName,setVictim] = useState("");
    const [displayName, setDisplay] = useState(false);

    const handleName = (e:SyntheticEvent)=>{
        let checkName = (e.target as HTMLInputElement).value.toLowerCase();
        // if (checkName.toLowerCase().includes("gabriel")){
        //     setVictim("Azriel");
        // }else {
        //     setVictim(checkName);
        // }
        setVictim(checkName.replace('gabriel','azriel'));
    }

    const checkName = ()=>{
        // return `hello ${victimName}`;
        setDisplay(true);
    }

    //the input element get focus
    const handleFocus = ()=>{
        setDisplay(false);
    }

    return (
        <div className="gabriel Box">
            <h2>Who am i</h2><hr/>
            <input type="text" placeholder="victim name" onChange={handleName} onFocus={handleFocus}/><br/>
            <input type="button" value={"send"} onClick={checkName}/>
            <hr/>
            {/* {displayName && `hello ${victimName}`} */}
            {displayName && `hello ${victimName}`}
        </div>
    );
}

export default Gabriel;
