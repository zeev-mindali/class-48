import { NavLink } from "react-router-dom";
import "./MainMenu.css";

function MainMenu(): JSX.Element {
    return (
        <div className="MainMenu">
			<h2>Main Menu</h2><hr/>
            <NavLink to="/">Song list</NavLink><br/><br/>
            <NavLink to="/addSong">Add new song</NavLink><br/><br/>
            <NavLink to="/about">About me</NavLink>
        </div>
    );
}

export default MainMenu;
