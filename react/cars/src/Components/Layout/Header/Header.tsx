import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { store } from "../../redux/store";
import { logoutAction } from "../../redux/AuthRedicer";
import notify from "../../utils/Notify";
import { checkJWT } from "../../utils/JWT";

function Header(): JSX.Element {
  const [isLogged, setLogged] = useState(false);
  const navigate = useNavigate();
  store.subscribe(() => {
    setLogged(store.getState().auth.jwt.length>10);
    //checkJWT();
  });
  useEffect(() => {
    const myJWT = localStorage.getItem("jwt") || "";
    setLogged(myJWT?.length > 10);
  }, []);
  const logoutButton = () => {
    return (
      <>
        <input
          type="button"
          value="logout"
          onClick={() => {
            store.dispatch(logoutAction());
            notify.success("goodbye, and thank you for the fish");
            sessionStorage.removeItem("jwt");
            localStorage.removeItem("jwt");
          }}
        />
      </>
    );
  };

  const loginButton = () => {
    return (
      <>
        <input
          type="button"
          value="login"
          onClick={() => {
            navigate("/login");
          }}
        />
        <input
          type="button"
          value="register"
          onClick={() => navigate("/register")}
        />
      </>
    );
  };
  return (
    <div className="Header">
      <div>
        <h2>Car Finder</h2>
        <div>Hello {store.getState().auth.name}</div>
        <div>{isLogged ? logoutButton() : loginButton()}</div>
      </div>
    </div>
  );
}

export default Header;
