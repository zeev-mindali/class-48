import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
                <Header/>
            </header>
            <aside>
                <Footer/>
            </aside>
            <main>
                </>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default MainLayout;
