import React, { useState } from "react";
import { TextField as MuiTextField, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import MobileGreenLogo from "../components/MobileGreenLogo"
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopColorLogo from '../assets/DesktopColorLogo.svg'
import BlueEllipse from "../assets/BlueCircleIcon.svg"







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
}`
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
const StyledFormControlLabel = styled(FormControlLabel)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color:"#002a80"
  background:"pink"
  
  .MuiTypography-root {
   font-size: 14px; /* Change the font size as desired */
   color: red; /* Change the color as desired */
   /* Add any additional styles you want */
 }
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

const SignIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
 



  const navigate = useNavigate();
 
  const LogClick = () => {
    navigate("/Login");
  };

  // const handleSignUp = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://opti-trackapi.azurewebsites.net/Accounts/register",
  //       {
  //         title: "string",
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //         confirmPassword,
  //         acceptTerms: agreeTerms,
  //       }
  //     );

  //     // Check the response status code or any other relevant data to determine if the sign-up was successful
  //     if (response.status === 200) {
  //       // Successful sign-up
  //       setError("");
  //       // Redirect to the desired page or perform other actions
  //       localStorage.setItem("userData", JSON.stringify(response));

  //       navigate("/Login");
  //     } else {
  //       // Sign-up failed
  //       setError("Sign-up failed. Please check your details and try again.");
  //     }
  //   } catch (error) {
  //     // Handle any errors that occur during the API request
  //     console.log("Sign-up error:", error);
  //     setError("An error occurred during sign-up. Please try again later.");
  //   }
  // };
  
  

  const handleSignup = () => {
    // Check first name
    const validFirstNames = ["victoria", "caleb", "femi","theresa","micheal","derek"];
    if (!validFirstNames.includes(firstName.toLowerCase())) {
      setError("Input your First Name");
      return;
    }

    // Check last name
    const validLastNames = ["odemakin", "Aregbesola", "awolowo","oyim","ochai","orodu"];
    if (!validLastNames.includes(lastName.toLowerCase())) {
      setError("Input your First Name");
      return;
    }

    // Check email
    if (!email.includes("@")) {
      setError("email must contain @");
      return;
    }


    // Check password
    const validPasswords = ["Adedayomi@97", "Adeboy@123 ", "Adeboy@123 "];
    if (!validPasswords.includes(password)) {
      setError("password must contain @, 0-9");
      return;
    }

    // Check confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // All conditions met, proceed to login page
    setError("");
    // Navigate to login page or perform other actions

    navigate(`/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);

  };
   // Set the email and password in the credentials state
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
<div className="SignUpForm">
{isDesktop ? (
        <div className="DesktopScreenSignIn" style={{height:"100vh", overflow:"hidden"}}>
         <div className="SignInContainer">
<div className="SignInNow">
 <div className="DesktopLogoSignIn">
 <img src={DesktopColorLogo} alt="desktop color logo" style={{width:"25%", margin:"2em 1em 2em 8em", }}/>
 </div>
 <div className="DesktopSignInText">
 <h1>Have all your business finances in one place, to stay on top of your business result.</h1>
 </div>
 <div className="LogoName">
 <HeaderTypography variant="h3">Optimize</HeaderTypography>
 </div>
</div>

         </div>
         <div className="SignInFormArea" style={{padding:"3em 7em", height:"100vh"}}>
<div className="DesktopSignInFormText">
<h2>Create an account</h2>
          <p>Sign up to get an account</p>
          <p>Already have an account? <span style={{fontWeight:"bold", cursor:"pointer"}} onClick={LogClick} >Log in</span></p>
</div>
<div className="Container" style={{display: "flex",flexDirection: "column",alignItems:"center",padding: "20px"}}>

<TextField
        label="First Name"
        value={firstName}
        fullWidth
        onChange={(e) => setFirstName(e.target.value)}
        required
        style={{marginBottom:"20px"}}
      />
      <TextField
        label="Last Name"
        fullWidth
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        style={{marginBottom:"20px"}}

      />
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{marginBottom:"20px"}}

      />
      <TextField
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{marginBottom:"20px"}}

      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        style={{marginBottom:"20px"}}

      />
      <div style={{marginLeft:"-27em", marginTop:"-1.5em"}}>
      <StyledFormControlLabel
        control={
          <Checkbox
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            style={{margin:"1em 1em", textAlign:"right",color:"#002a80", }}

          />
        }
        label="I agree to Terms and Conditions"
        style={{color:"#002a80"}}
      />
      </div>
      
      <OutlineButton
                  variant="outlined"
                  sx={{ textTransform: "capitalize", fontWeight: "bold", marginTop:"-4em", marginRight:"-35em"}}
                  onClick={handleSignup} >
                  Sign Up
                </OutlineButton>
      {error && <p>{error}</p>}
    </div>
         </div>
          
        </div>
      ) : (
        <div className="MobileScreen" style={{ height: "100vh", position: "relative", padding:"1em"}}>
                  <MobileGreenLogo />

         <div className="MobileItem">
      <h3>Create an account</h3>
      <h5>Already have an account? <span style={{fontWeight:"bold", cursor:"pointer"}} onClick={LogClick}> Log in</span></h5>
          </div>
          <div className="MobileFormSignIn" style={{position:"absolute", top:"150px", paddingRight:"1em"}}>

<TextField
        label="First Name"
        value={firstName}
        fullWidth
        onChange={(e) => setFirstName(e.target.value)}
        required
        style={{marginBottom:"20px", width:"100%"}}
      />
      <TextField
        label="Last Name"
        fullWidth
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        style={{marginBottom:"20px"}}

      />
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{marginBottom:"20px"}}

      />
      <TextField
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{marginBottom:"20px"}}

      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        style={{marginBottom:"10px"}}

      />
      <div style={{marginTop:"-2em", textAlign:"center"}}>
      <StyledFormControlLabel
        control={
          <Checkbox
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            style={{margin:"1em 0", textAlign:"right",color:"#002a80", }}

          />
        }
        label="I agree to Terms and Conditions"
        style={{color:"#002a80"}}
      />
      </div>
      
      <OutlineButton
                  variant="outlined"
                  sx={{ textTransform: "capitalize", fontWeight: "bold", textAlign:"center", margin:"1em 5em"}}
                  onClick={handleSignup} >
                  Sign Up
                </OutlineButton>
      {error && <p>{error}</p>}
    </div>
    <div>
          <img src={BlueEllipse} alt="footer circle" style={{position:"relative", top:"200px",left:"-20px"}}/>
            </div>
        </div>
        
      )}
</div>



   
  );
};

export default SignIn;
