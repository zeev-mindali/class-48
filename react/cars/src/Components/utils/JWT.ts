import { useNavigate } from "react-router-dom";
import { store } from "../redux/store";
//npm install react-jwt
//https://www.npmjs.com/package/react-jwt
import { isExpired, decodeToken } from "react-jwt";
import { AuthState, loginAction } from "../redux/AuthRedicer";
import { decode } from "punycode";

export const checkJWT = () => {
  //check if we have jwt in sessionStorage
  let jwt = "";
  jwt = sessionStorage.getItem("jwt")?.split(" ")[1] || "";
  if (jwt.length < 10) {
    jwt = localStorage.getItem("jwt")?.split(" ")[1] || "";
  }
  //getting our token without bearer
  //console.log("JWT: ",jwt)

  //if not check if we have it on localStorage

  if (jwt.length < 10) {
    return false;
  }

  //check if isExpired....
  if (isExpired(jwt)) {
    return false;
  }

  //console.log("jwt:",decodeToken(jwt));
  let myDecoded: any = decodeToken(jwt);
  myDecoded.jwt = "Bearer " + jwt;
  //console.log("decoded: ",myDecoded);
  store.dispatch(loginAction(myDecoded));

  return true;
};
