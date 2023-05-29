import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Typography, Button,   TextField as MuiTextField,InputAdornment ,IconButton
} from "@mui/material";
import MobileLogo from "./MobileLogo";
import { styled } from "@mui/material/styles";
import Ellipse70 from "../assets/FooterEllipse.svg";
import DesktopLogo from "../assets/DesktopColorLogo.svg"
import {useNavigate} from 'react-router-dom';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';


const OutlineButton = styled(Button)`
  background: #0dde6500;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: #002a80;
  width: 150px;
  border: 2px solid #002a80;
  margin-left: 1em;
  box-shadow: none;
`;
const HeaderTypography = styled(Typography)`
  color: #ffffff;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 2.5em;
  line-height: 4px;
  margin-left: 1.5em;

`;
const ContainedButton = styled(Button)`
  background: #0DDE65;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1em;
  color: #002a80;
  width: 150px;
  &:hover {
    background-color: transparent;
    border: 1px solid white;
    color: #0dde65; 
  }
`;
const TextField = styled(MuiTextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    color:  #ffffff; 
    &:hover fieldset {
      border-color: #ffffff;
    }
    &.Mui-focused fieldset {
      border-color: #ffffff; 
    }
  }
  .MuiFormLabel-root {
    color: #ffffff; 
  }
  .MuiInputBase-input {
    color: #ffffff; 
  }
  fieldset {
    border-color: #ffffff;
  }
`;
const TextArea = styled(MuiTextField)`
.MuiOutlinedInput-root {
  border-radius: 8px;
  color:  #002a80; 
  &:hover fieldset {
    border-color:#002a80;
  }
  &.Mui-focused fieldset {
    border-color: #002a80; 
  }
}
.MuiFormLabel-root {
  color: #002a80; 
}
.MuiInputBase-input {
  color: #002a80;
}
fieldset {
  border-color: #002a80;
}
`


const LogForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
 


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);

  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);

  };

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(!isValid);
    return isValid;
  };

  const validatePassword = () => {
    const isValid =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=])[A-Za-z\d!@#$%^&*()_\-+=]{10,}$/.test(password);
    setPasswordError(!isValid);
    return isValid;
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
 // Login logic here
 console.log('Email:', email);
 console.log('Password:', password);


   // Clear the input fields
   setEmail("");
   setPassword("");    }

 
  };
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      {isDesktop ? (
        <div className="DesktopLoginScreen">
          <div className="LoginContainer">
            <div className="DesktopLogo">
<img src={DesktopLogo} alt="desktop color logo" style={{width:"20%", margin:"2em 8em", }}/>
            </div>
            <div className="DesktopLoginForm">
              <h3>Welcome Back</h3>
              <h4>Log into your account</h4>
              <p>Don’t have an account? Sign up</p>
            </div>
            <div className="DesktopForm"style={{padding:"1em "}}>
            <form onSubmit={handleLogin}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                autoComplete="email"
                autoFocus
                required
                id="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
            helperText={emailError ? 'Invalid email address' : ''}
               
              />
              <TextField
                label="Password"
                fullWidth
                margin="normal"
                required
                type ={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"       
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={
                  passwordError
                    ? 'Password must be 10 characters long and contain at least one capital letter, one number, and one special character'
                    : ''
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff  style={{color:"white"}}/> : <Visibility style={{color:"white"}}/>}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
               
              />
             
              <div style={{textAlign:"right"}}>
                <p style={{color:"#ffffff", fontFamily:"Inter", fontSize:".7em",
              margin:"1em 0" }}>Forget password</p>
              </div>

              <div >
          <label style={{color:"#ffffff",fontSize:"0.8em",fontFamily:"Inter",}}>
            <input style={{  textAlign:"right",
            margin:"1em 1em",color:"#ffffff"}}
              type="checkbox"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
Always keep me logged in          </label>
        </div>

              <div className="LoginBtn" style={{margin:"3em 4.8em"}}>
                <ContainedButton
                  variant="contained"
                  type="submit"
                  sx={{ textTransform: "capitalize", fontWeight: "bold", }}
                  >
                  Log in
                </ContainedButton>
              </div>
            </form>
          </div>
          <div className="LogoLetter">
            <HeaderTypography variant="h3">Optimize</HeaderTypography>

            </div>
          </div>
          <div className="TextContainer">
            <h2>REVENUE CAPTURE</h2>
            <h2>EXPENSE CAPTURE</h2>
            <h2>BUDGET  TRACKING</h2>
            <h2> <span style={{background:"#002a80", color:"0DDE65"}}>
            ONE APP,FOR ALL <span style={{color:"white"}}>SME </span>
              </span> </h2>


          </div>


        </div>
      ) : (
        <div
          className="MobileLoginScreen"
          style={{ height: "100vh", position: "relative", padding:"1em"}}
        >
          <MobileLogo />
          <div className="FormContainer">
            <form onSubmit={handleLogin}>
              <TextArea
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                autoComplete="email"
                autoFocus
                required
                id="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
            helperText={emailError ? 'Invalid email address' : ''}
             
              />
              <TextArea
                label="Password"
 type ={showPassword ? 'text' : 'password'}                fullWidth
                margin="normal"
                required
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={
                  passwordError
                    ? 'Password must be 10 characters long and contain at least one capital letter, one number, and one special character'
                    : ''
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff  style={{color:"#002a80"}}/> : <Visibility style={{color:"#002a80"}}/>}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                
              />
              <div style={{textAlign:"right"}}>
                <p style={{color:"#002a80", fontFamily:"Inter", fontSize:".7em",
              margin:"1em 0" }}>Forget password</p>
              </div>

              <div >
          <label style={{color:"#002a80",fontSize:"0.8em",fontFamily:"Inter",}}>
            <input style={{  textAlign:"right",
            margin:"1em 1em",color:"#002a80"}}
              type="checkbox"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
Always keep me logged in          </label>
        </div>
              <div className="LoginBtn" style={{margin:"3em 4.8em"}}>
                <OutlineButton
                  variant="contained"
                  type="submit"
                  sx={{ textTransform: "capitalize", fontWeight: "bold", }}
                       >
                  Log in
                </OutlineButton>
              </div>
            </form>
          </div>
          <div>
            <img src={Ellipse70} alt="footer circle" style={{position:"relative", top:"90px",left:"-50px"}}/>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default LogForm;
