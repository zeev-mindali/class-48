import { Devices } from "../../../model/devices";
import { Epid } from "../../../model/epid";
import { Home } from "../../../model/home";
import ShowEpid from "../ShowEpid/ShowEpid";
import "./ShowDevices.css";

function ShowDevices(): JSX.Element {
    //create some mock data.....
    let myHome = new Home(
        1,
        "mindali",
        [
            new Devices(
                1, "sallon","gp31",10,[
                    new Epid(1,"main light"),
                    new Epid(2,"Spot light"),
                    new Epid(3, "led strip")
                ]
            ),
            new Devices(
                2, "kitchen", "gp21",11,[
                    new Epid(1,"main kitchen light"),
                    new Epid(2,"Bucher light")
                ]
            )
        ]
    );
    return (
        <div className="ShowDevices Box">
			<h1>{myHome.name}</h1><hr/>
            {myHome.devices.map((item,index)=>
            <ShowEpid key={index} endDevices={item.epid} />
            )}
        </div>
    );
}

export default ShowDevices;
