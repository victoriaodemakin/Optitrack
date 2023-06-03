import React, { useState } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileGreenLogo from "../components/MobileGreenLogo"
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import BlueEllipse from "../assets/BlueCircleIcon.svg"
import { Button, TextField as MuiTextField } from "@mui/material";
import DesktopColorLogo from '../assets/DesktopColorLogo.svg'
import {useNavigate} from 'react-router-dom';



const Signup = () => {
 const isDesktop = useMediaQuery('(min-width: 1024px)');
 const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [Agree, setAgree] = useState(false);


 const OutlineButton = styled(Button)`
 background: #003BB3;
 border-radius: 4px;
 font-style: normal;
 font-weight: 500;
 font-size: 1em;
 color: #ffff;
 width: 150px;
 border: 2px solid #003BB3;
 margin-left: .3em;
 box-shadow: none;
 &:hover  {
  border-color: #003BB3;
  color:#003BB3;
}
`;

const HeaderTypography = styled(Typography)`
  color: #ffffff;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 3em;
  line-height: 4px;
  margin-left: 1.7em;
  text-align: center;
  position:absolute;
  bottom: 50px;
`;
const TextField = styled(MuiTextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    color:  #002a80; 
    &:hover fieldset {
      border-color: #002a80;
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
  margin-top: -.4em;

}
`

 const handleFirstNameChange = (e) => {
   setFirstName(e.target.value);
 };

 const handleLastNameChange = (e) => {
   setLastName(e.target.value);
 };
 const handleEmailChange = (e) => {
   setEmail(e.target.value);
 };

 const handlePasswordChange = (e) => {
   setPassword(e.target.value);
 };

 const handleConfirmPasswordChange = (e) => {
   setConfirmPassword(e.target.value);
 };

 const handleCheckboxChange = () => {
   setAgree(!Agree);
 };

 const handleSignup = (e) => {
   e.preventDefault();}

 const handleSubmit = (e) => {
   e.preventDefault();
 };
 const navigate = useNavigate();
 const BudgetClick = () => {
   navigate('/Budgeting');
 };

  return (
    <div>
     {isDesktop ? (
          <div className="DesktopSignupScreen" style={{height:"100vh", overflow:"hidden"}}>
 <div className="SignupContainer">
   <div className="DesktopSignup">
     <div className="DesktopLogo">
       <img src={DesktopColorLogo} alt="desktop color logo" style={{width:"25%", margin:"2em 1em 2em 8em", }}/>
      </div>
        <div className="DesktopSignupForm">
         <h1>Have all your business finances in one place, to stay on top of your business result.</h1>
        </div>
        <div className="LogoLetter">
            <HeaderTypography variant="h3">Optimize</HeaderTypography>
        </div>
  </div> 
  </div>      
  <div className="DesktopForm"style={{padding:"3em 7em", height:"100vh"}}>
    <div className="DesktopSignupForm">
          <h2>Create an account</h2>
          <p>Sign up to get an account</p>
          <p>Already have an account? <span style={{fontWeight:"bold"}}>Log in</span></p>
    </div> 
   <form onSubmit={handleSignup}>
   <div>               
   <TextField
    label="Firstname"
    type="name"
    fullWidth
    margin="normal"
    autoComplete="name"
    autoFocus
    required
    id="firstName"
    value={firstName}
    onChange={handleFirstNameChange}
   /> 
   </div>
       <TextField
       label="Lastname"
       type="name"
       fullWidth
       margin="normal"
        autoComplete="name"
        required
        id="lastName"
        value={lastName}
       onChange={handleLastNameChange}/>
              <div>
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

              />
              </div>
              <div>
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                required
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}

              />
              </div>
              <div>
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                required
                id="password"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              </div>
              <div className="MobileBtn">
                <OutlineButton
                  variant="outlined"
                  sx={{ textTransform: "capitalize", fontWeight: "bold", marginTop:"-2.5em"}}
                  onClick={BudgetClick} >
                  Sign Up
                </OutlineButton>
              </div>
              <div style={{margin:"-3em 5em"}}>
          <label style={{color:"#002a80",fontSize:"0.8em",fontFamily:"Inter",}}>
            <input style={{  textAlign:"right",
            margin:"1em 1em",color:"#002a80"}}
              type="checkbox"
              id="termsCheckbox"
              checked={Agree}
              onChange={handleCheckboxChange}
            />
           I agree to all Terms and Conditions </label>
        </div>
  </form>

</div>
</div>
      ) : (
       <div className="MobileSignupScreen"
       style={{ height: "100vh", position: "relative", padding:"1em"}}>
<MobileGreenLogo />
<div className="MobileItem">
      <h3>Create an account</h3>
      <h5>Already have an account? <span> Log in</span></h5>
          </div>
<div className="">
<form className="FormContainer" onSubmit={handleSubmit} style={{marginTop:"2em"}}>
            <TextArea
              label="Firstname"
              type="name"
              fullWidth
              margin="normal"
             autoComplete="name"
             autoFocus
             required
             id="firstName"
             value={firstName}
             onChange={handleFirstNameChange}/>

            <TextArea
             label="Lastname"
             type="name"
             fullWidth
             margin="normal"
             autoComplete="name"
             required
             id="lastName"
             value={lastName}
             onChange={handleLastNameChange}/>
              
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
              />
              <TextArea
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                required
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
              />
              
              <TextArea
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                required
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleConfirmPasswordChange}
              />
              
            <div className="MobileBtn" style={{margin: "1em 5em"}}>
            <OutlineButton
                  variant="contained"
                  type="submit"
                  sx={{ textTransform: "capitalize", fontWeight: "bold", }}
                  onClick={BudgetClick}>
                  Sign up
            </OutlineButton>
            </div>
              <div style={{margin:"-1em 1em"}}>
          <label style={{color:"#002a80",fontSize:"0.8em",fontFamily:"Inter",}}>
            <input style={{  textAlign:"center",
            margin:"1em 1em",color:"#002A80"}}
              type="checkbox"
              id="termsCheckbox"
              checked={Agree}
              onChange={handleCheckboxChange}
            />
          I agree to all Terms and Conditions </label>
         </div>
  </form>
  
</div>
<div>
          <img src={BlueEllipse} alt="footer circle" style={{position:"relative", top:"220px",left:"-20px"}}/>
            </div>

       </div>
      )}


    </div>
  )
}

export default Signup