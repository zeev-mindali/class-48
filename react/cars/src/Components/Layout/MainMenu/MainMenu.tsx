import { NavLink } from "react-router-dom";
import "./MainMenu.css";

function MainMenu(): JSX.Element {
    return (
        <div className="MainMenu">
			<h2>Main Menu</h2><hr/>
            <NavLink to={"/search/car"}>car locater</NavLink><br/>
            <NavLink to={"/search/bike"}>bike locater</NavLink><br/>
            <NavLink to={"/search/truck"}>truck locater</NavLink><br/>
            <NavLink to={"/search/offroad"}>offride locater</NavLink><br/>
        </div>
    );
}

export default MainMenu;
