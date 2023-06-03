import React, { useState } from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNav from "../components/MobileNav";

import { styled } from "@mui/material/styles";

const Dashboard = () => {

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className='DashboardScreen'>
   {isDesktop ? (
        <div className="DesktopScreen" style={{position:"relative"}}>
          <TopNav Title="Dashboard"/>
        <Sidebar />
          
        </div>
      ) : (
        <div className="MobileScreen">
                 <MobileNav title="Dashboard" />

        </div>
      )}

    </div>
  )
}

export default Dashboard