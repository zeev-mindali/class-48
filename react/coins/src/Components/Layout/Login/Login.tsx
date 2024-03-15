import { SubmitHandler, useForm } from "react-hook-form";
import "./Login.css";

//to use forms, install : npm install react-hook-form
//useForm site

//userName:String, userPassword:String
type formInputs = {
  userName: String;
  userPassword: String;
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

  console.log(watch("userName")); //watch the user name value when passing data into it
  //study case:

  return (
    <div className="Login Box">
      <h2>Login form</h2>
      <hr />
      {/* handle submit, will check that there is no errors when submitting the form*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register our input to our useForm hook */}
        <input type="text" placeholder="User name..." {...register("userName")}/>
        <br />
        {/* register our input and validate it before sending, display an error, if there is any validation violation"*/}
        <input type="password" placeholder="User password..." {...register("userPassword",{required:true})}/><br/>
        {/* we need to display an error if there is an error, don't display if all is ok"*/}
        {errors.userPassword && <span className="ErrorText"> this field IS require</span>}
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
