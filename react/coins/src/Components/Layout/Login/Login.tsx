import { SubmitHandler, useForm } from "react-hook-form";
import "./Login.css";

//to use forms, install : npm install react-hook-form
//useForm site : https://www.react-hook-form.com/get-started/

//userName:String, userPassword:String
type formInputs = {
  userName: String;
  userPassword: String;
  userAddress: String;
  userCity: String;  
  userAge: number;
  userSmart:boolean; 
  userLocation: String;
};

function Login(): JSX.Element {
  //declare which functions we will use from useFrom, and the structure of inputs (string,number,boolean,etc....)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();

  const onSubmit: SubmitHandler<formInputs> = (data) => {
    //we can do whatever we like, for now we will print the result
    //on the next step, we will transfer our data to the backend....
    console.log(data);
  };

  //console.log(watch("userName")); //watch the user name value when passing data into it
  //study case:

  return (
    <div className="Login Box">
      <h2>Login form</h2>
      <hr />
      {/* handle submit, will check that there is no errors when submitting the form*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register our input to our useForm hook */}
        <input
          type="text"
          placeholder="User name..."
          {...register("userName", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        />
        <br />
        {errors.userName?.type == "required" && (
          <span className="ErrorText"> this field IS required</span>
        )}
        {errors.userName?.type == "minLength" && (
          <span className="ErrorText"> minimum Length : 8</span>
        )}
        {errors.userName?.type == "maxLength" && (
          <span className="ErrorText"> minimum Length : 18</span>
        )}
        <br />
        {/* register our input and validate it before sending, display an error, if there is any validation violation"*/}
        <input
          type="password"
          placeholder="User password..."
          {...register("userPassword", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        />
        <br />
        {errors.userPassword?.type == "required" && (
          <span className="ErrorText"> this field IS required</span>
        )}
        {errors.userPassword?.type == "minLength" && (
          <span className="ErrorText"> minimum Length : 8</span>
        )}
        {errors.userPassword?.type == "maxLength" && (
          <span className="ErrorText"> minimum Length : 18</span>
        )}
        <br />
        <input
          type="text"
          placeholder="user address..."
          {...register("userAddress", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        />
        <br />
        {errors.userAddress?.type == "required" && (
          <span className="ErrorText"> this field IS required</span>
        )}
        {errors.userAddress?.type == "minLength" && (
          <span className="ErrorText"> minimum Length : 8</span>
        )}
        {errors.userAddress?.type == "maxLength" && (
          <span className="ErrorText"> minimum Length : 18</span>
        )}        
        <select {...register("userLocation")}>
            <option value="north">Tzfon</option>
            <option value="center">Markaz</option>
            <option value="south">Darom</option>
            <option value="matti">Katzir</option>
        </select>
        <br />
        {errors.userLocation?.type == "required" && (
          <span className="ErrorText"> this field IS required</span>
        )}
        <br/>
        <input
          type="text"
          placeholder="user age..."
          {...register("userAge", {
            required: true,
            min: 18,
            max: 120,
          })}
        />
        <br />
        {errors.userAge?.type == "required" && (
          <span className="ErrorText"> this field IS required</span>
        )}
        {errors.userAge?.type == "min" && (
          <span className="ErrorText"> minimum Length : 8</span>
        )}
        {errors.userAge?.type == "max" && (
          <span className="ErrorText"> minimum Length : 120</span>
        )}
        {/* we need to display an error if there is an error, don't display if all is ok"*/}
        <br />
        <input type="checkbox" {...register("userSmart",{required: true})}/>
        <br />
        {errors.userSmart?.type == "required" && (
            <span className="ErrorText">So you are not smart???</span>
        )}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
