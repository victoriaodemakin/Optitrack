import React from 'react'
import { useState } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar, Toolbar, IconButton, Menu, MenuItem,Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { styled } from "@mui/material/styles";
import {useNavigate} from 'react-router-dom';




const StyledAppBar = styled(AppBar)`
background-color: #002a80;
position: absolute;
width: 1065px;
height: 58px;
left: 300.5px;
top: 0px;
box-shadow: none;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledIconButton = styled(IconButton)`
  color: #fff;

  &:hover {
    color: #0DDE65;
  }
`;
const HeaderTypography = styled(Typography)`
  color: #ffffff;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.3em;
  line-height: 4px;
`;
const StyledMenuItem = styled(MenuItem)`
color: #002a80;
font-family: "Urbanist";
font-weight: 400;
font-size: 1em;
line-height: 20px;
&:hover {
  color: #0DDE65;
  background-color: #002a80;
  font-weight: 400;
  font-size: 1.2em;

}
`
const TopNav = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const ProfileClick = () => {
    navigate('/Profile');
  };
  return (
    <div> {isDesktop ? (
      <div>
      <StyledAppBar position="static">
        <StyledToolbar>
          <div className="PageName">
          <HeaderTypography variant="h3">Expenses</HeaderTypography>
          </div>
          <div className="IconContainer">
          <StyledIconButton color="inherit" aria-label="Mail">
            <EmailOutlinedIcon/>
          </StyledIconButton>
          <StyledIconButton color="inherit" aria-label="Notifications">
            <NotificationsNoneOutlinedIcon />
          </StyledIconButton>
          <StyledIconButton color="inherit" aria-label="Profile" onClick={handleMenuOpen}>
            <AccountCircleOutlinedIcon />
          </StyledIconButton>
          </div>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
          >
            <StyledMenuItem onClick={ProfileClick}>Profile</StyledMenuItem>
            <StyledMenuItem onClick={handleMenuClose}>Settings</StyledMenuItem>
            <StyledMenuItem onClick={handleMenuClose}>Logout</StyledMenuItem>
          </Menu>
        </StyledToolbar>
      </StyledAppBar>
    </div>
    ) : (
      <h1>This is the hero for mobile devices.</h1>
    )}</div>
  )
}

export default TopNav


 

 
