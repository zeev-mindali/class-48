import { Route, Routes } from "react-router-dom";
import SongList from "../../Pages/SongList/SongList";
import AddNewSong from "../../Pages/AddNewSong/AddNewSong";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Page404 from "../../Pages/Page404/Page404";
import Player from "../../Pages/Player/Player";
import AddCategory from "../../Pages/AddCategory/AddCategory";

function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<SongList/>}/>
                <Route path="/addSong" element={<AddNewSong/>}/>
                <Route path="/about" element={<AboutMe/>}/>
                <Route path="/player/:name/:id" element={<Player/>}/>
                <Route path="/cat/:catName" element={<SongList/>}/>
                <Route path="/newCat" element={<AddCategory/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRoute;
