import { useEffect, useState } from "react";
import "./Header.css";
import { youtube } from "../../../redux/store";

function Header(): JSX.Element {
    const userName = "zeev mindali";
    const [totalSongs,setTotal] = useState(youtube.getState().songs.allSongs.length)

    // useEffect(()=>{
    //     setTotal(youtube.getState().songs.allSongs.length);
    // },[])
    youtube.subscribe(()=>{
        setTotal(youtube.getState().songs.allSongs.length);
    })
    return (
        <div className="Header">
			<h1>Songs for shanti banti</h1>
            <h2>Total songs in the system {totalSongs}</h2>
        </div>
    );
}

export default Header;
