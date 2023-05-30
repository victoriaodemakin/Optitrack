import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery"
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const Budgeting = () => {
 const navigate = useNavigate();
 const BudgetClick = () => {
   navigate("/Budgeting");
 };
  return (
    <div>Budgeting</div>
  )
}

export default Budgeting