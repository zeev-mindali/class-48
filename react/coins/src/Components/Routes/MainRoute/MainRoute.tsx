import { Route, Routes } from "react-router-dom";
import Main from "../../Pages/Main/Main";
import Assests from "../../Pages/Assests/Assests";
import Rates from "../../Pages/Rates/Rates";
import Page404 from "../../Pages/Page404/Page404";
import Exchanges from "../../Pages/Exchanges/Exchanges";
import ExchangesID from "../../Pages/ExchangesID/ExchangesID";
import Login from "../../Layout/Login/Login";


//remmeber to install : npm install react-router-dom
//remmeber to install : npm install react-dom
function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/assests" element={<Assests/>}/>
                <Route path="/rates" element={<Rates/>}/>
                <Route path="/exchanges" element={<Exchanges/>}/>
                <Route path="/exchangesId/:id" element={<ExchangesID/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRoute;
