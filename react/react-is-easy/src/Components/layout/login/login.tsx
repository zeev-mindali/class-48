import "./Login.css";

function Login(): JSX.Element {
    return (
        <div className="Login Box">
			<h2>Login form</h2><hr/>
            <input type="text" placeholder="User name..." /><br/>
            <input type="password" placeholder="User password..."/><br/><br/>            
            <input type="button" value="Login" />
        </div>
    );
}

export default Login;
