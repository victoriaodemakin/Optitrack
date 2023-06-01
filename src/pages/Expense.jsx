import React from "react";
import TopNav from "../components/TopNav";
import { Card } from '@mui/material';
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import useMediaQuery from "@mui/material/useMediaQuery";
import Table from "../components/Table";
import WalletCard from "../components/WalletCard";
// import Transaction from "../components/Transaction";
// import CardWallet from "../components/CardWallet";

import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  display: flex;
`

const Expense = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
       {isDesktop ? (
        <div className="DesktopScreen">
      <TopNav Title='Expenses' />
        <Sidebar />
      <div className="tableC">
          <WalletCard />
          <Table />
        </div>
        </div>
       ):(

        <div className="MobileScreen">
        <MobileNav title="Expenses" />
      </div>
    )}
  </div>
  );
}; 

export default Expense;
