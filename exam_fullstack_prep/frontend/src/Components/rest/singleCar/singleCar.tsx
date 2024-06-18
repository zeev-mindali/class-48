import "./singleCar.css";

interface SingleCarProps {
	baalut:String;
    tozeret_nm:String;
    kinuy_mishari:String;
    sug_delek_nm:String;
    mispar_rechev:number;
}

function SingleCar(props: SingleCarProps): JSX.Element {
    return (
        <div className="singleCar Box">	
            <b><span className="carNumber">{props.mispar_rechev}</span></b><hr/>
            <div className="carInfo">
                {props.baalut}<br/>
                {props.tozeret_nm}<br/>
                {props.kinuy_mishari}<br/>
                {props.sug_delek_nm}<br/>
            </div>
        </div>
    );
}

export default SingleCar;
