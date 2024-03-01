import Ofir from "../../stam/Ofir/Ofir";
import "./MainPage.css";

function MainPage(): JSX.Element {
    let bestStudent:String = "Matti";
    let complicatedStudent:String = "Gabriel";
    let devices:number = 120;
    let total:number = 80;
    let normalDay:String = "prepared food";
    let weekend:String = "Salmon with potatoes";
    let isWeekend:boolean = false;
    let weekendMessage:String = "Weekend !!!! time to relax";
    let studentsInClass = [
        {id: 1, name:"Yeruslav"},
        {id: 2, name:"Yarden"},
        {id: 3, name:"Dima"},
        {id: 4, name:"The Hammer"},
        {id: 5, name:"Gabriel"},
        {id: 6, name:"Simyon"},
    ]
    return (
        <div className="MainPage">
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
        </div>
    );
}

export default MainPage;
