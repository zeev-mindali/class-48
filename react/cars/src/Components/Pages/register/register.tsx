import { SubmitHandler, useForm } from "react-hook-form";
import "./register.css";
import notify from "../../utils/Notify";
import axios from "axios";

type userCred = {
    userName:string,
    userPass:string,
    passCheck:string,
    userRole:string,
    userEmail:string,
}
function Register(): JSX.Element {
    const {register,handleSubmit, formState:{errors}} = useForm<userCred>();

    const makeLogin:SubmitHandler<userCred> = (data)=>{
        if (data.userPass!==data.passCheck){
            notify.error("Password mismatch");
            return;
        }
        //go to axios and send the information....
        axios.post("/api/v1/login/registerUser")
        .then (res=>{

        })
        .catch(err=>{

        })
    }

    const fieldNeed = {
        required:true,
        minLength:5,
        maxLength:10
    }
    return (
        <div className="register">
			<div className="Box">
                <h1>Reigster user</h1><hr/>
                <form onSubmit={handleSubmit(makeLogin)}>
                    <input type="text" placeholder="user name" {...register("userName",fieldNeed)}/><br/><br/>
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
