import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Login(): JSX.Element {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  useEffect(() => {
    //if we have a valid token , we can navigate to the main page :)
  }, []);

  const checkUserCred = () => {
    //create object to send...
    const userCred = {
      userName: userName,
      userPass: userPass,
    };

    axios
      .post("http://localhost:8080/api/v1/login/loginUser", userCred)
      .then((res) => {
        console.log("jwt:",res.headers["authorization"]);
        //get the jwt token
        localStorage.setItem("jwt",res.headers["authorization"]);
        console.log(res);
        //if token is ok move to main page....
        navigate("/search/car");
      })
      .catch((err) => {
        console.log(err);
      });
    
  };
  return (
    <div className="login Box">
      <h1>Login User</h1>
      <hr />
      <input
        type="text"
        placeholder="user name"
        onChange={(args) => setUserName(args.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="user password"
        onChange={(args) => setUserPass(args.target.value)}
      />
      <br />
      <hr />
      <input type="button" value="login" onClick={checkUserCred} />
    </div>
  );
}

export default Login;
