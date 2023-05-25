import React, { useState } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { Typography, Button, TextField as MuiTextField, Avatar } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/system';
import ProfilePicture from '../assets/ProfilePicture.svg'

// Styles
const Container = styled(Box)`
  display: flex;
  height: 100vh;
`;

const DesktopSidebar = styled(Box)`
  background-color: #002a80;
  color: #ffffff;
  width: 25%;
  display: flex;
  flex-direction: column;
`;

const MobileSidebar = styled(Box)`
  background-color: #002a80;
  color: #ffffff;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarLink = styled(Typography)`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #002a80;
  }
`;

const MainContent = styled(Box)`
  flex: 1;
  padding: 20px;
`;

const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SaveButton = styled(Button)`
  background-color: #002a80;
  color: #ffffff;
  margin-right: 10px;
`;

const EditButton = styled(Button)`
background-color: #002a80;
color: #ffffff;
`;

const ProfilePage = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [isEditing, setIsEditing] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  return (
    <Container>
      {isDesktop ? (
        <DesktopSidebar>
          <SidebarLink>Dashboard</SidebarLink>
          <SidebarLink>Capture Revenue</SidebarLink>
          <SidebarLink>Capture Expense</SidebarLink>
          <SidebarLink>Budget</SidebarLink>
          <SidebarLink>Simulation</SidebarLink>
        </DesktopSidebar>
      ) : (
        <MobileSidebar>
          <SidebarLink>☰</SidebarLink>
        </MobileSidebar>
      )}

      <MainContent>
        <HeaderContainer>
          <MuiTextField
            label="My Profile"
            variant="outlined"
            size="small"
            disabled={!isEditing}
          />
          <MailIcon />
          <Avatar src={ProfilePicture} alt="Profile Picture" sx={{ width: '30px', height: '30px', alignSelf: 'center' }}/>
          <NotificationsIcon />
        </HeaderContainer>

        <Box display="flex" gap={40}>
          <Box width={isDesktop ? '200px' : '100%'}>
            <Avatar
              src={ProfilePicture}
              alt="Profile Picture"
              sx={{ width: '120px', height: '120px', alignSelf: 'center' }}
            />
            <MuiTextField
              label="Business Name"
              variant="outlined"
              size="small"
              fullWidth
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              disabled={!isEditing}
              sx={{ marginBottom: '10px' }}
            />
            <MuiTextField
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
              sx={{ marginBottom: '10px' }}
            />
            <MuiTextField
              label="Social Media"
              variant="outlined"
              size="small"
              fullWidth
              value={socialMedia}
              onChange={(e) => setSocialMedia(e.target.value)}
              disabled={!isEditing}
              sx={{ marginBottom: '10px' }}
            />
            <MuiTextField
              label="Phone Number"
              variant="outlined"
              size="small"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={!isEditing}
              sx={{ marginBottom: '10px' }}
            />
            <MuiTextField
              label="Description"
              variant="outlined"
              size="small"
              fullWidth
              multiline
              minRows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={!isEditing}
              sx={{ marginBottom: '10px' }}
            />

            {isEditing ? (
              <Box display="flex" justifyContent="flex-end">
                <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
              </Box>
            ) : (
              <Box display="flex" justifyContent="flex-end">
                <EditButton onClick={handleEditProfile}>Edit Profile</EditButton>
              </Box>
            )}
          </Box>
        </Box>
      </MainContent>
    </Container>
  );
};

export default ProfilePage;
