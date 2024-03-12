import { NavLink } from "react-router-dom";
import "./MainMenu.css";

function MainMenu(): JSX.Element {
    return (
        <div className="MainMenu">
			<NavLink to="/"><h1>main menu</h1></NavLink><hr/>
            <b>Assets</b><hr/>
            <NavLink to="/assests" >Assets</NavLink><br/>
            Assets by ID<br/>
            ID history<br/>
            ID markets<br/><br/>
            <b>Rates</b><hr/>
            <NavLink to="/rates">Rates</NavLink><br/>
            Rates by ID<br/><br/>
            <b>Exchanges</b><hr/>
            <NavLink to="/exchanges">Exchanges</NavLink><br/>
            <NavLink to="/exchangesId/kraken"> by ID</NavLink> <br/><br/>
            <b>Markets</b><hr/>  
            markets          
        </div>
    );
}

export default MainMenu;
