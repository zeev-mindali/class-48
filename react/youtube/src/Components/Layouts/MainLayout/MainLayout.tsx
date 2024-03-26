import MainRoute from "../../Routes/MainRoute/MainRoute";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
                <Header/>
            </header>
            <aside>
                <MainMenu/>
            </aside>
            <main>
                <MainRoute/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default MainLayout;
