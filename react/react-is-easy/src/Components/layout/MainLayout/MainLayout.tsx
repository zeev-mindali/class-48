import Cars from "../../rest/cars/cars";
import Gabriel from "../../targil/gabriel/gabriel";
import Login from "../Login/Login";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import MainMenu from "../MainMenu/MainMenu";
import MainPage from "../MainPage/MainPage";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
                <MainHeader/>
            </header>
            <aside>
                <MainMenu/>
            </aside>
            <main>
                <Login/>
            </main>
            <footer>
                <MainFooter/>
            </footer>
        </div>
    );
}

export default MainLayout;
