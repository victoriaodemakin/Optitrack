import React from "react";
import TopNav from "../components/TopNav";
import { Card } from '@mui/material';
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import WalletCard from "../components/WalletCard";
// import Transaction from "../components/Transaction";
// import CardWallet from "../components/CardWallet";

import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  display: flex;
`

const Expense = () => {
  return (
    <div>
      <TopNav/>
      <Sidebar/>
      <div className="tableC">
      <WalletCard/>
      <Table/> 
      </div>
    </div>
  );
};

export default Expense;
