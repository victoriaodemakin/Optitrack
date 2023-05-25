import React from "react";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import CardWallet from "../components/CardWallet";
// import Table from "../components/Table";

const Expense = () => {
  return (
    <div>
      <CardWallet />
      <TopNav />
      <Sidebar />
    </div>
  );
};

export default Expense;
