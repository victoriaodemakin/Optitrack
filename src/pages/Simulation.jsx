import React from 'react'
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";



const Simulation = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
 
  return (
    <div>
      {isDesktop ? (
        <div className="DesktopScreen">
         <TopNav Title="Simulation" />
         <Sidebar/>
        </div>
      ) : (
        <div className="MobileScreen">
          <MobileNav/>
        </div>
      )}
    </div>
  )
}

export default Simulation