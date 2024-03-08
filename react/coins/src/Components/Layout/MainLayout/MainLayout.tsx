import CoinLayout from "../CoinLayout/CoinLayout";
import FooterLayout from "../FooterLayout/FooterLayout";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <header>
        <HeaderLayout />
      </header>
      <main>
        <CoinLayout/>
      </main>
      <footer>
        <FooterLayout/>
      </footer>
    </div>
  );
}

export default MainLayout;
