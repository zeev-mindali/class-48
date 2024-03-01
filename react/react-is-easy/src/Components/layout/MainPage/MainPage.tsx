import Gang1 from "../../modules/gang1/gang1";
import Ofir from "../../stam/Ofir/Ofir";
import "./MainPage.css";

function MainPage(): JSX.Element {
    // let bestStudent:String = "Matti";
    // let complicatedStudent:String = "Gabriel";
    // let devices:number = 120;
    // let total:number = 80;
    // let normalDay:String = "prepared food";
    // let weekend:String = "Salmon with potatoes";
    // let isWeekend:boolean = false;
    // let weekendMessage:String = "Weekend !!!! time to relax";
    // let studentsInClass = [
    //     {id: 1, name:"Yeruslav"},
    //     {id: 2, name:"Yarden"},
    //     {id: 3, name:"Dima"},
    //     {id: 4, name:"The Hammer"},
    //     {id: 5, name:"Gabriel"},
    //     {id: 6, name:"Simyon"},
    // ]
    let myDevice = [
        {id:1, nodeId:10, name:"entrance", location:"main-floor",total:0},
        {id:2, nodeId:11, name:"dinning", location:"main-floor",total:0},
        {id:3, nodeId:12, name:"kitchen", location:"main-floor",total:0},
        {id:4, nodeId:15, name:"pool", location:"main-floor",total:1},
        {id:5, nodeId:17, name:"master-bedroom", location:"main-floor",total:1},
    ]
    return (
        <div className="MainPage">
            {/* <Gang1 nodeId={10} name={"entrance"} location={"main-floor"}/>
            <Gang1 nodeId={12} name={"dinning"} location={"main-floor"}/> */}
            {myDevice.map(item=><Gang1 
                key={item.id} nodeId={item.nodeId} name={item.name} location={item.location} totalEpid={item.total}            />)}
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
