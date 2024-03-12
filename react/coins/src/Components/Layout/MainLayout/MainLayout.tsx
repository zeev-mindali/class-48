import MainRoute from "../../Routes/MainRoute/MainRoute";
import CoinLayout from "../CoinLayout/CoinLayout";
import FooterLayout from "../FooterLayout/FooterLayout";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import MainMenu from "../MainMenu/MainMenu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <header>
        <HeaderLayout />
      </header>
      <aside>
        <MainMenu/>
      </aside>
      <main>
        <MainRoute/>
      </main>
      <footer>
        <FooterLayout/>
      </footer>
    </div>
  );
}

export default MainLayout;
