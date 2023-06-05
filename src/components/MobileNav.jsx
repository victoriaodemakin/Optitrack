import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Money as MoneyIcon,
  History as HistoryIcon,
  PieChart as PieChartIcon,
  InsertChart as InsertChartIcon,
} from "@mui/icons-material";
import Ellipse70 from "../assets/FooterEllipse.svg";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const MenuButton = styled(IconButton)`
  margin-right: 16px;
`;

const PageName = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  margin-left: -5em;
`;
const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #002a80;
    overflow-x: hidden;
  }
`;
const HeaderTypography = styled(Typography)`
  color: white;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  line-height: 4px;
`;
const StyledMenuItem = styled(MenuItem)`
  color: #002a80;
  font-family: "Inter";
  font-weight: 500;
  font-size: 1em;
  line-height: 10px;
  &:hover {
    color: #0dde65;
    background-color: #002a80;
    font-weight: 400;
    font-size: 1.2em;
  }
`;

const MobileNav = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  const ProfileClick = () => {
    navigate("/Profile");
  };
  const RevenueClick = () => {
    navigate("/Revenue");
  };
  const ExpenseClick = () => {
    navigate('/Expense');
  };
  const BudgetClick = () => {
    navigate("/Budgeting");
  };
  const SimulationClick = () => {
    navigate("/Simulation");
  };
  const DashboardClick = () => {
    navigate("/Dashboard");
  };


  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {" "}
      <AppBar
        position="fixed"
        style={{
          boxShadow: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          sx={{
            background: "white",
            boxShadow: "none",
            justifyContent: "space-between",
            padding: "1em",
          }}
        >
          <MenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon sx={{ color: "#002a80" }} />
            )}
          </MenuButton>
          <PageName variant="h6">{props.title}</PageName>
          <Avatar
            style={{ border: "1px solid #002a80" }}
            onClick={handleMenuOpen}
          />
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
        </Toolbar>
      </AppBar>
      <StyledDrawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <div>
          <IconButton onClick={toggleMenu}>
            <CloseIcon style={{ color: "white", marginLeft: "8em" }} />
          </IconButton>
        </div>
        <div
          className="MobileDrawerLogo"
          style={{ padding: "1em", margin: "1em auto" }}
        >
          <HeaderTypography variant="h3">Optitrack</HeaderTypography>
        </div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "white" }} onClick={DashboardClick} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MoneyIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Capture Revenue" sx={{ color: "white" }} onClick={RevenueClick}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MoneyIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Capture Expense" onClick={ExpenseClick} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PieChartIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Budgeting" onClick={BudgetClick}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InsertChartIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Simulation" onClick={SimulationClick} />
          </ListItem>
        </List>
        <div>
          <img
            src={Ellipse70}
            alt="footer circle"
            style={{ position: "relative", top: "20px", left: "-50px" }}
          />
        </div>
      </StyledDrawer>
    </div>
  );
};

export default MobileNav;
