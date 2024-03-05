import { SyntheticEvent, useEffect, useState } from "react";
import "./login.css";

function Login(): JSX.Element {
    //let ourTime=new Date().toLocaleTimeString();
    //each update of the variables, declared on useState will start the component render again
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
        //console.log("user pass: ",(e.target as HTMLInputElement).value);
    }
    const showCred = ()=>{
        console.log("user name: ",userName, " user password: ",userPass)
    }

    //the interval will be created, only when component is loaded for the first time.
    useEffect(()=>{
        console.log("interval was created");
        setInterval(()=>{            
            //ourTime=new Date().toLocaleTimeString(); will not work in react , we are using Virtual DOM
            setTime(new Date().toLocaleTimeString());
        },800);
    },[])
   
    return (
        <div className="login Box">
			<h2>Login form</h2><hr/>
            <input type="text" placeholder="User name..." onKeyUp={updateUserName}/><br/>
            <input type="password" placeholder="User password..." onChange={updateUserPass}/><br/><br/>            
            <input type="button" value="Login" onClick={showCred}/>
            <hr/>
              hello {userName}
            <hr/>
            {ourTime}
        </div>
    );
}

export default Login;
