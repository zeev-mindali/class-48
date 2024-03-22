import { Route, Routes } from "react-router-dom";
import MainPage from "../../Layout/MainPage/MainPage";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import Page404 from "../../Pages/page404/page404";

function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/search/:vechileType" element={<SearchPage/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRoute;
