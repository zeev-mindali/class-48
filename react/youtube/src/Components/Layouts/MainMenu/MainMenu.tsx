import { NavLink } from "react-router-dom";
import "./MainMenu.css";
import { youtube } from "../../../redux/store";
import { useState } from "react";

function MainMenu(): JSX.Element {
    const [catList,setCatList] = useState(youtube.getState().categories.allCat);
    youtube.subscribe(()=>{
        setCatList(youtube.getState().categories.allCat)
    })
    return (
        <div className="MainMenu">
			<h2>Main Menu</h2><hr/>
            <NavLink to="/">Song list</NavLink><br/><br/>
            <NavLink to="/addSong">Add new song</NavLink><br/><br/>
            <NavLink to="/newCat">Add new Category</NavLink><br/><br/>
            <NavLink to="/about">About me</NavLink><hr/>
            {catList.map(item=>
                <>
                    <NavLink to={`/cat/${item}`}>{item}</NavLink>
                    <br/><br/>
                </>
            )}
        </div>
    );
}

export default MainMenu;
