import { SyntheticEvent, useState } from "react";
import "./login.css";

function Login(): JSX.Element {
    //let ourTime=new Date().toLocaleTimeString();
    const [ourTime,setTime] = useState(new Date().toLocaleTimeString());
    const [userName,setUserName] = useState("");
    const [userPass,setUserPass] = useState("");

    const updateUserName = (e:SyntheticEvent)=>{
        //console.log((e.target as HTMLInputElement).value);
        setUserName((e.target as HTMLInputElement).value);
        //console.log("user name: ",userName)
    }
    const updateUserPass = (e:SyntheticEvent)=>{
        setUserPass((e.target as HTMLInputElement).value);
        console.log("user pass: ",userPass);
    }
    // setInterval(()=>{
    //     console.log("time was changed")
    //     //ourTime=new Date().toLocaleTimeString(); will not work in react , we are using Virtual DOM
    //     setTime(new Date().toLocaleTimeString());
    // },1000);
    return (
        <div className="login Box">
			<h2>Login form</h2><hr/>
            <input type="text" placeholder="User name..." onKeyUp={updateUserName}/><br/>
            <input type="password" placeholder="User password..." onChange={updateUserPass}/><br/><br/>            
            <input type="button" value="Login"/>
            <hr/>
              hello {userName}
            <hr/>
            {ourTime}
        </div>
    );
}

export default Login;
