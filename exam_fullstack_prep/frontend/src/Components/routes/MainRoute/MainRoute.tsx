import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import MainPage from "../../layout/MainPage/MainPage";
import { SingleProduct } from "../../pages/SingleProduct/SingleProduct";
import { UpdateProduct } from "../../pages/UpdateProduct/UpdateProduct";
import { Page404 } from "../../pages/Page404/Page404";

export function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/product" element={<SingleProduct/>}/>
                <Route path="/update" element={<UpdateProduct/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
