import { useParams } from "react-router-dom";
import "./Player.css";
import { useEffect } from "react";

function Player(): JSX.Element {
    const params = useParams();
    useEffect(()=>{
        console.log(params.id,params.name);
    });
    return (
        <div className="Player">
			<h1>{params.name}</h1>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${params.id}?si=dzEtnlbKH_7matP0`} title={`${params.name}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
}

export default Player;
