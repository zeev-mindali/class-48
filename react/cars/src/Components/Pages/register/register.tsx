import { SubmitHandler, useForm } from "react-hook-form";
import "./register.css";
import notify from "../../utils/Notify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type userCred = {
    userName:string,
    userPass:string,
    passCheck:string,
    userRole:string,
    userEmail:string,
}
function Register(): JSX.Element {
    const navigate=useNavigate();
    const {register,handleSubmit, formState:{errors}} = useForm<userCred>();

    const makeLogin:SubmitHandler<userCred> = (data)=>{
        if (data.userPass!==data.passCheck){
            notify.error("Password mismatch");
            return;
        }

        let sendData = {
            userName:data.userName,
            userPass:data.userPass,
            userRole:data.userRole,
            userEmail:data.userEmail,
        }
        //go to axios and send the information....
        axios.post("http://localhost:8080/api/v1/login/registerUser",sendData)
        .then (res=>{
            notify.success("User was registered successfully");            
            navigate("/");
        })
        .catch(err=>{
            notify.error("Error accord while registering the user");
            console.log(err);
        })
    }

    const fieldNeed = {
        required:true,
        minLength:5,
        maxLength:15
    }
    return (
        <div className="register">
			<div className="Box">
                <h1>Reigster user</h1><hr/>
                <form onSubmit={handleSubmit(makeLogin)}>
                    <input type="text" placeholder="user name" {...register("userName",fieldNeed)}/>
                    {errors.userName?.type==="required" && <><br/><span style={{color:"red"}}>you must write user name</span></>}
                    {errors.userName?.type==="minLength" && <><br/><span style={{color:"red"}}>user name must be 5 char minimum</span></>}
                    {errors.userName?.type==="maxLength" && <><br/><span style={{color:"red"}}>user name must be 15 char maximum</span></>}<br/><br/>
                    <input type="password" placeholder="user password" {...register("userPass",fieldNeed)}/><br/><br/>
                    <input type="password" placeholder="check password"{...register("passCheck")}/><br/><br/>
                    <input type="text" placeholder="user email" {...register("userEmail")}/><br/><br/>
                    <select {...register("userRole",{required:true})}>
                        <option>User</option>
                        <option>Comapny</option>
                        <option>Admin</option>
                    </select>
                    <hr/>
                    <input type="submit" value="register"/>
                </form>
            </div>
        </div>
    );
}

export default Register;
