import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import DesktopLogo from "../assets/DesktopColorLogo.svg";
import RevenueIcon from "@mui/icons-material/MoneyOutlined";
import ExpenseIcon from "@mui/icons-material/TrendingDownOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BudgetingIcon from "@mui/icons-material/MonetizationOnOutlined";
import BarChartIcon from "@mui/icons-material/BarChartOutlined";
import HistoryIcon from "@mui/icons-material/HistoryOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const StyledListItem = styled(ListItem)`
  &.active {
    background-color: ${({ theme }) => theme.palette.action.selected};
    &:hover {
      background-color: #002a80;
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #002a80;
    overflow-x: hidden;
  }
`;
const HeaderTypography = styled(Typography)`
  color: #ffffff;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 2.5em;
  line-height: 4px;
  margin-left: 1.55em;
   {
     {
      selectedmenuitem=== 'dashboard' ? '#ffffff' : "#000000";
    }
  }
`;

const StyledDashboardIcon = styled(DashboardIcon)`
  color: #ffffff;
`;
const StyledRevenueIcon = styled(RevenueIcon)`
  color: #ffffff;
`;
const StyledExpenseIcon = styled(ExpenseIcon)`
  color: #ffffff;
`;
const StyledBudgetingIcon = styled(BudgetingIcon)`
  color: #ffffff;
`;
const StyledBarChartIcon = styled(BarChartIcon)`
  color: #ffffff;
`;
const StyledHistoryIcon = styled(HistoryIcon)`
  color: #ffffff;
`;

const ListTypography = styled(Typography)`
  color: #ffffff;
  font-family: "Urbanist";
  font-weight: 500;
  font-size: 1em;
  line-height: 4px;
  margin-left: 0.8em;
`;

const Sidebar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  const navigate = useNavigate();
 
  const BudgetClick = () => {
    navigate("/Budgeting");
  };

  const ExpenseClick = () => {
    navigate("/Expense");
  };
  const RevenueClick = () => {
    navigate("/Revenue");
  };
  const SimulationClick = () => {
    navigate("/Simulation");
  };
  const DashboardClick = () => {
    navigate("/Dashboard");
  };

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      {isDesktop ? (
        <StyledDrawer variant="permanent">
          <div
            className="DrawerContainer"
            style={{ background: "#002a80", height: "100vh", width: "300px" }}
          >
            <div className="DesktopLogo">
              <img
                src={DesktopLogo}
                alt="desktop color logo"
                style={{ width: "20%", margin: "1em 7em .5em" }}
              />
            </div>

            <List>
              <StyledListItem
                button
                onClick={() => handleMenuItemClick("dashboard")}
                className={selectedMenuItem === "dashboard" ? "active" : ""}
              >
                <ListItemIcon>
                  <StyledDashboardIcon />
                </ListItemIcon>
                <ListTypography variant="h6" onClick={DashboardClick}>
                  Dashboard
                </ListTypography>
              </StyledListItem>

              <StyledListItem
                button
                onClick={() => handleMenuItemClick("capture-revenue")}
                className={
                  selectedMenuItem === "capture-revenue" ? "active" : ""
                }
              >
                <ListItemIcon>
                  <StyledRevenueIcon />
                </ListItemIcon>
                <ListTypography variant="h6" onClick={RevenueClick}>Capture Revenue</ListTypography>
              </StyledListItem>

              <StyledListItem
                button
                onClick={() => handleMenuItemClick("capture-expense")}
                className={
                  selectedMenuItem === "capture-expense" ? "active" : ""
                }
              >
                <ListItemIcon>
                  <StyledExpenseIcon />
                </ListItemIcon>
                <ListTypography variant="h6" onClick={ExpenseClick}>
                  Capture Expense
                </ListTypography>
              </StyledListItem>

              <StyledListItem
                button
                onClick={() => handleMenuItemClick("budgeting")}
                className={selectedMenuItem === "budgeting" ? "active" : ""}
              >
                <ListItemIcon>
                  <StyledBudgetingIcon />
                </ListItemIcon>
                <ListTypography variant="h6" onClick={BudgetClick}>
                  Budgeting
                </ListTypography>
              </StyledListItem>

              <StyledListItem
                button
                onClick={() => handleMenuItemClick("simulation")}
                className={selectedMenuItem === "simulation" ? "active" : ""}
              >
                <ListItemIcon>
                  <StyledBarChartIcon />
                </ListItemIcon>
                <ListTypography variant="h6" onClick={SimulationClick}>
                  Simulation
                </ListTypography>
              </StyledListItem>

              <StyledListItem
                button
                onClick={() => handleMenuItemClick("history")}
                className={selectedMenuItem === "history" ? "active" : ""}
              >
                <ListItemIcon>
                  <StyledHistoryIcon />
                </ListItemIcon>
                <ListTypography variant="h6">History</ListTypography>
              </StyledListItem>
            </List>
            <div className="LogoLetter" style={{ marginTop: "16em" }}>
              <HeaderTypography variant="h3">Optimize</HeaderTypography>
            </div>
          </div>
        </StyledDrawer>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;
