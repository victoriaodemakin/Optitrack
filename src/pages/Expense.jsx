import React from "react";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
// import Transaction from "../components/Transaction";
// import CardWallet from "../components/CardWallet";
const Expense = () => {
  return (
    <div>
      <TopNav/>
      <Sidebar />
      <Table />
    </div>
  );
};

export default Expense;
