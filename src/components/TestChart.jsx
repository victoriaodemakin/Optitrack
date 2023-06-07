// Dashboard.js
import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderTypography = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  line-height: 4px;
  margin-left: -2em
  margin-bottom
`;
const TestChart = () => {
  const expenseAmount = useSelector((state) => state.expense.expenseAmount);
  const budgetAmount = useSelector((state) => state.budget.budgetAmount);

  const data = [
    { name: "Actual Expense", amount: expenseAmount },
    { name: "Budget", amount: budgetAmount },
  ];

  const getBarColor = (entry) => {
    if (entry.name === "Expense") {
      return "lightblue";
    }
    return "blue";
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "630px",
        top: "10px",
        zIndex: "999",
      }}
    >
      <HeaderTypography style={{marginBottom:"2em", marginLeft:"3em"}}>Daily Analysis</HeaderTypography>
      <BarChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="{expenseAmount}" fill={getBarColor} />
        <Bar dataKey="amount" fill="#4ED273"  />

      </BarChart>
    </div>
  );
};

export default TestChart;
