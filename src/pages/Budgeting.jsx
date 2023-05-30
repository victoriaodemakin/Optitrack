import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery"
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";





const Budgeting = () => {
 const navigate = useNavigate();
 const BudgetClick = () => {
   navigate("/Budgeting");
 };
 const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div>{isDesktop ? (
      <div className="DesktopScreen">
        <TopNav Title="Expenses" />
        <Sidebar />
        <button onClick={BudgetClick}>Hello</button>
      </div>
    ) : (
      <div className="MobileScreen">
        <MobileNav title="Expenses" />
      </div>
    )}</div>
  )
}

export default Budgeting