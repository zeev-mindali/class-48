import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

function Header(): JSX.Element {
  const [isLogged,setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const myJWT = localStorage.getItem("jwt") || "";
    setLogged(myJWT?.length >10);
  }, []);
  const logoutButton = () => {
    return (
      <>
        <input
          type="button"
          value="logout"
          onClick={() => {
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
            navigate("/");
          }}
        />
      </>
    );
  };
  return (
    <div className="Header">
      <div>
        <h1>Car Finder</h1>
        <div>{isLogged ? logoutButton() : loginButton()}</div>
      </div>
    </div>
  );
}

export default Header;
