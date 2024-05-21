import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect, useState } from "react";
import axios from "axios";
import notify from "../../utils/Notify";
import { SubmitHandler, useForm } from "react-hook-form";
import { store } from "../../redux/store";
import { AuthState, loginAction } from "../../redux/AuthRedicer";

function Login(): JSX.Element {
  const navigate = useNavigate();

  //user name, user pass, remember me, user role:user,company,admin
  type userCred = {
    userName: string;
    userPass: string;
    userRole: string;
    rememberMe: boolean;
  };

  useEffect(() => {
    //if we have a valid token , we can navigate to the main page :)
  }, []);

  //use form methods and data type
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userCred>();

  const makeLogin: SubmitHandler<userCred> = (data) => {
    //handle remember me...
    axios
      .post("http://localhost:8080/api/v1/login/loginUser", {
        userName: data.userName,
        userPass: data.userPass,
      })
      .then((res) => {
        //console.log("my result:",res.data);
        //update the redux        
        store.dispatch(loginAction(res.data))
        const jwt = res.headers["authorization"];
        if (data.rememberMe) {
          localStorage.setItem("jwt", jwt);
        } else {
          localStorage.removeItem("jwt");
          sessionStorage.setItem("jwt", jwt);
        }        
        notify.success("Welcome my master....");
        navigate("/main")
      })
      .catch ((err)=>{
        notify.error("Why who are you?");
      });
  };

  //   const checkUserCred = () => {

  //     axios
  //       .post("http://localhost:8080/api/v1/login/loginUser", userCred)
  //       .then((res) => {
  //         console.log("jwt:", res.headers["authorization"]);
  //         //get the jwt token
  //         localStorage.setItem("jwt", res.headers["authorization"]);
  //         console.log(res);
  //         //if token is ok move to main page....
  //         notify.success("hellllllllllllo, la la la la la");
  //         navigate("/search/car");
  //       })
  //       .catch((err) => {
  //         console.log("you are not allowed");
  //         notify.error("Bad user name or password");
  //       });
  //   };
  return (
    <div className="login Box">
      <h1>Login User</h1>
      <hr />
      <form onSubmit={handleSubmit(makeLogin)}>
        <input
          type="text"
          placeholder="user name"
          {...register("userName",{required:true, minLength:5, maxLength:10})}
        />
        {errors.userName && <><br/><span style={{color:"red"}}>WTF?</span></>}
        <br />
        <br />
        <input
          type="password"
          placeholder="user password"
          {...register("userPass",{required:true, minLength:5, maxLength:10})}
        />
        {errors.userPass && <><br/><span style={{color:"red"}}>WTF?</span></>}
        <br />
        <br />
        <input type="checkbox" {...register("rememberMe")}/>
        Remember me
        <hr />
        <input type="submit" value="login"/>
      </form>
    </div>
  );
}

export default Login;
