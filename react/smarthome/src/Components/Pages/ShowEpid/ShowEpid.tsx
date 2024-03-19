import { Epid } from "../../../model/epid";
import "./ShowEpid.css";

// type epidProps={
//     endDevices:Epid[];
// }

interface epidProps{
    endDevices:Epid[];
}

function ShowEpid(props:epidProps): JSX.Element {
    return (
        <div className="ShowEpid BoxInside">
			{props.endDevices.map((item,index)=>
                    <>
                        <span key={item.id}>epid: {item.id}</span>
                        <span key={index}><input type="text" value={item.name as string}/></span>
                    </>
            )}
        </div>
    );
}

export default ShowEpid;
