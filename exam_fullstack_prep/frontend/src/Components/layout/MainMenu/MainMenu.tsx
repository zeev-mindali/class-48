import { NavLink } from "react-router-dom";
import "./MainMenu.css";

function MainMenu(): JSX.Element {
   
    return (
        <div className="MainMenu">
            <br/>
			<b>Main menu</b>
            <br/><br/>
            <hr/>
                <NavLink to="/">All Products</NavLink><br/><br/>
                <NavLink to="/product">Single Product</NavLink><br/><br/>
                <NavLink to="/update">Update Product</NavLink><br/><br/>
        </div>
    );
}

export default MainMenu;
