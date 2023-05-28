import React, { useState } from 'react';
import { TextField, Button, Avatar } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LogoUploadButton = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

const RegisterPage = () => {
  const [logo, setLogo] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    setLogo(URL.createObjectURL(file));
  };

  const handleSaveChanges = () => {
    // Save changes logic goes here
  };

  const handleUpdateChanges = () => {
    // Update changes logic goes here
  };

  return (
    <Container>
      <h2>Register Your Business</h2>
      <LogoUploadButton>
        <CloudUpload />
        <input type="file" accept="image/*" onChange={handleLogoUpload} style={{display:"none" border:"2px solid red"}} />
        Upload Your Logo
      </LogoUploadButton>
      {logo && <Avatar src={logo} alt="Logo" sx={{ width: '120px', height: '120px', alignSelf: 'center', border:"2px solid #0DDE65" }}/>}
      <FormContainer>
        <TextField
          label="Business Name"
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Social Media"
          value={socialMedia}
          onChange={(event) => setSocialMedia(event.target.value)}
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
        <Button variant="contained" color="primary" onClick={handleUpdateChanges}>
          Update Changes
        </Button>
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;
