import React from "react";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import useMediaQuery from "@mui/material/useMediaQuery";

// import Transaction from "../components/Transaction";
// import CardWallet from "../components/CardWallet";
const Expense = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      {isDesktop ? (
        <div className="DesktopScreen">
          <TopNav Title="Expenses" />
          <Sidebar />
        </div>
      ) : (
        <div className="MobileScreen">
          <MobileNav title="Expenses" />
        </div>
      )}
    </div>
  );
};

export default Expense;
