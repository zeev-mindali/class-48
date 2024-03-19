import {
  Button,
  ButtonGroup,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import { AccountBox, Message } from "@mui/icons-material";

//to install mui -> npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
//mui site : https://mui.com/material-ui/
function Login(): JSX.Element {
    const myIcons = 40;
  return (
    <div className="Login Box">
      <Typography variant="h4" className="HeadLine">
        Login Form
      </Typography>
      <hr />
      <br />
      <AccountBox style={{ fontSize: myIcons, margin: 10 }} />
      <TextField label="user name" variant="outlined" />
      <br />
      <br />
      <Message style={{ fontSize: myIcons, margin: 10 }} />
      <TextField type="password" label="user password" variant="outlined" />
      <br />
      <br />
      <Checkbox />
      <label>Remember me</label>
      <hr />
      <ButtonGroup variant="contained" fullWidth>
        <Button color="success">Login</Button>
        <Button color="error">Reset</Button>
      </ButtonGroup>
    </div>
  );
}

export default Login;
