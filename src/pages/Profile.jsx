import React, { useState, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import {
  Button,
  TextField as MuiTextField,
  Avatar,
  Modal,
} from "@mui/material";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import MobileNav from "../components/MobileNav";

// Styles

const ContainedButton = styled(Button)`
  background: #003bb3;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1em;
  color: white;
  width: 150px;
`;
const OutlineButton = styled(Button)`
  background: #0dde6500;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: #003bb3;
  width: 150px;
  border: 2px solid #003bb3;
  margin-left: 1em;
`;

const StyleUploadIcon = styled(UploadFileOutlinedIcon)`
  color: #002a80;
  margin: -0.3em 1em;
`;

const TextField = styled(MuiTextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    color: #002a80;

    &:hover fieldset {
      border-color: #002a80;
    }
    &.Mui-focused fieldset {
      border-color: #002a80;
    }
  }
  .MuiFormLabel-root {
    color: #002a80;
    font-size: 12px;
    font-family: inter;
  }
  .MuiInputBase-input {
    color: #002a80;
  }
  fieldset {
    border-color: #002a80;
    margin-top: -0.4em;
  }
`;
const LogoUploadButton = styled(Button)`
  text-transform: none;
`;

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [logo, setLogo] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("userDetails"))
  // );

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    setLogo(URL.createObjectURL(file));
  };
console.log(inputValue)
  const dataUser = {
    avatar: "Mr",
    name: businessName,
    description: description,
    accountId: "d6ee3195-c510-499f-073c-08db659b033f",
  };
  // const getBusinessDetails = () => {
  //   try {
  //   fetch(
  //       `https://opti-trackapi.azurewebsites.net/api/Businesss/get-business/${user?.businessId}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setInputValue(data)
  //         setBusinessName(data.name)
  //         setBusinessName(data.name)
  //         console.log(data, "response")
  //       });

  //     // console.log(businessName);
  //     // console.log(description);

  //     // if (response.ok) {
  //     //   const responseData = await response.json();
  //     //   console.log(responseData, "the response data");
  //     //   console.log(responseData.data);
  //     //   let updatedUser = JSON.parse(localStorage.getItem("userDetails"));
  //     //   updatedUser = {
  //     //     ...updatedUser,
  //     //     businessId: responseData[0],
  //     //     walletId: responseData[1],
  //     //   };
  //     //   console.log(updatedUser, "the updated user");
  //     //   localStorage.setItem("userDetails", JSON.stringify(updatedUser));

  //     //businessID
  //     // setData(responseData);
  //     // console.log(data);

  //     // localStorage.setItem('modal-trigger', true)
  //     // navigate("/receipt");
  //     // } else {
  //     //   const errorData = await response.json();
  //     //   console.error("Transfer failed:", errorData);
  //     //   // Handle specific error scenarios based on errorData
  //     // }
  //   } catch (error) {
  //     console.error("Error sending transfer request:", error);
  //   }
  // };
  // useEffect(() => {
  //   getBusinessDetails();
  // }, [getBusinessDetails]);

  const handleSaveChanges = async (event) => {
    setIsEditing(false);

    // Send a POST request to the API endpoint
    try {
      const response = await fetch(
        "https://opti-trackapi.azurewebsites.net/api/Businesss/create-business",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "text/plain",
          },
          body: JSON.stringify(dataUser),
        }
      );
      console.log(businessName);
      console.log(description);

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData, "the response data");
        console.log(responseData.data);
        let updatedUser = JSON.parse(localStorage.getItem("userDetails"));
        updatedUser = {
          ...updatedUser,
          businessId: responseData[0],
          walletId: responseData[1],
        };
        console.log(updatedUser, "the updated user");
        localStorage.setItem("userDetails", JSON.stringify(updatedUser));

        //businessID
        // setData(responseData);
        // console.log(data);

        // localStorage.setItem('modal-trigger', true)
        // navigate("/receipt");
      } else {
        const errorData = await response.json();
        console.error("Transfer failed:", errorData);
        // Handle specific error scenarios based on errorData
      }
    } catch (error) {
      console.error("Error sending transfer request:", error);
    }
    setInputValue(event.target.value);
    // console.log(setUser)

  };

  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUpdateClick = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  if (businessName && email && socialMedia && phoneNumber && description) {
    // All form fields are filled
    // Proceed with form submission or other actions
    console.log("Form submitted!");
  }

  return (
    <div className="ProfileScreen">
      {isDesktop ? (
        <div style={{ position: "relative" }}>
          <Sidebar />
          <TopNav Title="Profile" />
          <div
            className="ProfilePage"
            style={{ position: "absolute", left: "500px", top: "100px" }}
          >
            <div className="ProfileContainer" style={{ display: "flex" }}>
              {logo && (
                <Avatar
                  src={logo}
                  alt="Logo"
                  sx={{
                    width: "120px",
                    height: "120px",
                    alignSelf: "center",
                    border: "2px solid #0DDE65",
                    marginBottom: ".8em",
                  }}
                />
              )}
              <div>
                <StyleUploadIcon />
                <LogoUploadButton
                  onClick={handleUploadButtonClick}
                  style={{
                    color: "#002a80",
                    border: "2px dashed #002a80",
                    padding: ".5em 2em",
                    cursor: "pointer",
                    margin: "1em -3.75em",
                  }}
                >
                  Upload Your Logo
                </LogoUploadButton>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  label={{ fileInput: "Upload Your Logo" }}
                  ref={fileInputRef}
                  style={{
                    alignItems: "center",
                    border: "2px dashed #002a80",
                    cursor: "pointer",
                    margin: "1em 2em",
                    color: "#002a80",
                    padding: "1em",
                    opacity: "0",
                  }}
                />
              </div>
            </div>
            <form>
              <TextField
                label="Business Name"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                
                disabled={isEditing}
                sx={{ marginBottom: "25px", width: "600px", marginTop: "1em" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isEditing}
                sx={{ marginBottom: "25px", width: "600px" }}
              />
              <div className="Contacts" style={{ display: "flex" }}>
                <TextField
                  label="Social Media"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  value={socialMedia}
                  onChange={(e) => setSocialMedia(e.target.value)}
                  disabled={isEditing}
                  sx={{ marginBottom: "25px", width: "290px" }}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  size="small"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={isEditing}
                  sx={{
                    marginBottom: "25px",
                    width: "290px",
                    marginLeft: "1em",
                  }}
                />
              </div>

              <TextField
                label="Description"
                variant="outlined"
                size="large"
                fullWidth
                multiline
                minRows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isEditing}
                sx={{ marginBottom: "25px", width: "600px" }}
              />
            </form>
            <div className="ProfileBtn">
              <ContainedButton
                variant="contained"
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                onClick={handleSaveChanges}
              >
                Create Business
              </ContainedButton>
              <OutlineButton
                variant="outlined"
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                onClick={handleUpdateClick}
              >
                Upadate Info{" "}
              </OutlineButton>
            </div>
          </div>
          <Modal
            open={openModal}
            onClose={handleModalClose}
            sx={{ background: "rgba(0,42,128,0.5)" }}
          >
            <div
              className="ModalContainer"
              style={{
                background: "white",
                width: "60%",
                height: "90vh",
                margin: " 2em auto",
                padding: "2em 7em",
              }}
            >
              <div className="ProfileContainer" style={{ display: "flex" }}>
                {logo && (
                  <Avatar
                    src={logo}
                    alt="Logo"
                    sx={{
                      width: "120px",
                      height: "120px",
                      alignSelf: "center",
                      border: "2px solid #0DDE65",
                      marginBottom: ".8em",
                    }}
                  />
                )}
                <div>
                  <StyleUploadIcon />
                  <LogoUploadButton
                    onClick={handleUploadButtonClick}
                    style={{
                      color: "#002a80",
                      border: "2px dashed #002a80",
                      padding: ".5em 2em",
                      cursor: "pointer",
                      margin: "1em -3.75em",
                    }}
                  >
                    Upload Your Logo
                  </LogoUploadButton>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    label={{ fileInput: "Upload Your Logo" }}
                    ref={fileInputRef}
                    style={{
                      alignItems: "center",
                      border: "2px dashed #002a80",
                      cursor: "pointer",
                      margin: "1em 2em",
                      color: "#002a80",
                      padding: "1em",
                      opacity: "0",
                    }}
                  />
                </div>
              </div>
              <form>
                <TextField
                  label="Business Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  disabled={!isEditing}
                  sx={{
                    marginBottom: "25px",
                    width: "600px",
                    marginTop: "1em",
                  }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                  sx={{ marginBottom: "25px", width: "600px" }}
                />
                <div className="Contacts" style={{ display: "flex" }}>
                  <TextField
                    label="Social Media"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    value={socialMedia}
                    onChange={(e) => setSocialMedia(e.target.value)}
                    disabled={isEditing}
                    sx={{ marginBottom: "25px", width: "290px" }}
                  />
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={isEditing}
                    sx={{
                      marginBottom: "25px",
                      width: "290px",
                      marginLeft: "1em",
                    }}
                  />
                </div>

                <TextField
                  label="Description"
                  variant="outlined"
                  size="large"
                  fullWidth
                  multiline
                  minRows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={isEditing}
                  sx={{ marginBottom: "25px", width: "600px" }}
                />
              </form>
              <div className="ProfileBtn">
                <ContainedButton
                  variant="contained"
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </ContainedButton>
                <OutlineButton
                  variant="outlined"
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  onClick={handleModalClose}
                >
                  Cancel{" "}
                </OutlineButton>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
        <div className="ProfileMobileScreen">
          <MobileNav title="My Profile" />
          <div
            className="MobileProfile"
            style={{
              width: "100%",
              position: "absolute",
              left: "5px",
              top: "100px",
            }}
          >
            <div
              className="ProfileContainer"
              style={{ display: "flex", flexDirection: "row", padding: "1em" }}
            >
              {logo && (
                <Avatar
                  src={logo}
                  alt="Logo"
                  sx={{
                    width: "90px",
                    height: "90px",
                    alignSelf: "center",
                    border: "2px solid #0DDE65",
                    marginBottom: ".8em",
                    marginLeft: "1em",
                  }}
                />
              )}
              <div style={{ position: "relative" }}>
                <StyleUploadIcon
                  style={{ position: "absolute", left: "-15px", top: "27px" }}
                />
                <LogoUploadButton
                  onClick={handleUploadButtonClick}
                  style={{
                    color: "#002a80",
                    border: "2px dashed #002a80",
                    padding: ".5em 1.5em",
                    cursor: "pointer",
                    margin: "1em .5em .2em 0.5em",
                    opacity: "1",
                  }}
                >
                  Upload Your Logo
                </LogoUploadButton>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  label={{ fileInput: "Upload Your Logo" }}
                  ref={fileInputRef}
                  style={{
                    alignItems: "center",
                    border: "2px dashed #002a80",
                    cursor: "pointer",
                    margin: "1em -2em",
                    color: "#002a80",
                    padding: "1em",
                    display: "none",
                  }}
                />
              </div>
            </div>
            <form style={{ padding: "1em" }}>
              <TextField
                label="Business Name"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                disabled={isEditing}
                sx={{ marginBottom: "15px", width: "100%", marginTop: "1em" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isEditing}
                sx={{ marginBottom: "15px", width: "100%" }}
              />
              <div className="Contacts">
                <TextField
                  label="Social Media"
                  variant="outlined"
                  size="small"
                  required
                  value={socialMedia}
                  onChange={(e) => setSocialMedia(e.target.value)}
                  disabled={isEditing}
                  sx={{ marginBottom: "15px", width: "100%" }}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  size="small"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={isEditing}
                  sx={{
                    marginBottom: "15px",
                    width: "100%",
                  }}
                />
              </div>

              <TextField
                label="Description"
                variant="outlined"
                size="large"
                fullWidth
                multiline
                minRows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isEditing}
                sx={{ marginBottom: "15px", width: "100%" }}
              />
            </form>
            <div
              className="ProfileBtn"
              style={{ padding: "1em", display: "flex" }}
            >
              <ContainedButton
                variant="contained"
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                onClick={handleSaveChanges}
              >
                Save Changes
              </ContainedButton>
              <OutlineButton
                variant="outlined"
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                onClick={handleUpdateClick}
              >
                Update User{" "}
              </OutlineButton>
            </div>
            <Modal
              open={openModal}
              onClose={handleModalClose}
              sx={{ background: "rgba(0,42,128,0.5)" }}
            >
              <div
                className="ModalContainer"
                style={{
                  background: "white",
                  width: "90%",
                  height: "120vh",
                  margin: " 2em 1em",
                  padding: "1em",
                }}
              >
                <div className="ProfileContainer" style={{ display: "flex" }}>
                  {logo && (
                    <Avatar
                      src={logo}
                      alt="Logo"
                      sx={{
                        width: "90px",
                        height: "90px",
                        alignSelf: "center",
                        border: "2px solid #0DDE65",
                        marginBottom: ".8em",
                      }}
                    />
                  )}
                  <div>
                    <StyleUploadIcon />
                    <LogoUploadButton
                      onClick={handleUploadButtonClick}
                      style={{
                        color: "#002a80",
                        border: "2px dashed #002a80",
                        padding: ".5em 2em",
                        cursor: "pointer",
                        margin: "1em -3.75em",
                      }}
                    >
                      Upload Your Logo
                    </LogoUploadButton>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      label={{ fileInput: "Upload Your Logo" }}
                      ref={fileInputRef}
                      style={{
                        alignItems: "center",
                        border: "2px dashed #002a80",
                        cursor: "pointer",
                        margin: "1em 2em",
                        color: "#002a80",
                        padding: "1em",
                        opacity: "0",
                      }}
                    />
                  </div>
                </div>
                <form>
                  <TextField
                    label="Business Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      marginBottom: "15px",
                      width: "100%",
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditing}
                    sx={{ marginBottom: "15px", width: "100%" }}
                  />
                  <div className="Contacts">
                    <TextField
                      label="Social Media"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      value={socialMedia}
                      onChange={(e) => setSocialMedia(e.target.value)}
                      disabled={isEditing}
                      sx={{ marginBottom: "15px", width: "100%" }}
                    />
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      size="small"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      disabled={isEditing}
                      sx={{
                        marginBottom: "15px",
                        width: "100%",
                      }}
                    />
                  </div>

                  <TextField
                    label="Description"
                    variant="outlined"
                    size="large"
                    fullWidth
                    multiline
                    minRows={4}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isEditing}
                    sx={{ marginBottom: "15px", width: "100%" }}
                  />
                </form>
                <div
                  className="ProfileBtn"
                  style={{ padding: "1em", display: "flex" }}
                >
                  <ContainedButton
                    variant="contained"
                    sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </ContainedButton>
                  <OutlineButton
                    variant="outlined"
                    sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                    onClick={handleModalClose}
                  >
                    Cancel{" "}
                  </OutlineButton>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
