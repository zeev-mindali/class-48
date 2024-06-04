import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			Menu<hr/>
            <NavLink to="/bookList">book list</NavLink><br/>
            <NavLink to="/addBook">add book</NavLink><br/>
            <hr/>
            <NavLink to="/authorsList">authors list</NavLink><br/>
            <NavLink to="/addAuthor">add author</NavLink><br/>
        </div>
    );
}

export default Menu;
