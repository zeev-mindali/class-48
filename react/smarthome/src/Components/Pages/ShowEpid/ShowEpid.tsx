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
        <div className="ShowEpid Box">
			{props.endDevices.map((item,index)=>
                    <>
                        <span key={item.id}>epid: {item.id}</span><br/>
                        <span key={index}>{item.name}</span><hr/>
                    </>
            )}
        </div>
    );
}

export default ShowEpid;
