import "./MainHeader.css";

function MainHeader(): JSX.Element {
    let devices:number = 120;
    let total:number = 80;
    return (
        <div className="MainHeader">
			<h1>Smart Home name configuration</h1>
            Devices {devices} / Total {total}
        </div>
    );
}

export default MainHeader;
