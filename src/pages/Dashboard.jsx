import React, {   } from 'react'; //useeffect here
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNav from "../components/MobileNav";
import { Box, Card,  Typography } from "@mui/material";
import ChartBar from '../components/ChartBar';
import ChartPie from '../components/ChartPie';
import TestChart from '../components/TestChart';
import { styled } from "@mui/material/styles";

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(2),
}));

const WalletCard = styled(Card)(({ theme }) => ({
  width: "317px",
  height: "152px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: theme.spacing(2),
  margin: theme.spacing(0, 2, 0, 0),
}));


  
const HeaderTypography = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  line-height: 4px;
  margin-left: -1em
  margin-bottom
`;

const Dashboard = () => {
  

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className='DashboardScreen'>
   {isDesktop ? (
        <div className="DesktopScreen" style={{position:"relative"}}>
          <TopNav Title="Dashboard"/>
        <Sidebar />
        <div className="DashboardCard" style={{ position: "absolute", left: "315px", top: "80px", zIndex:"999" }}>
        <Box sx={{ padding: "16px", marginBottom:"2em"}}>
      <HeaderTypography variant="h3">Analysis</HeaderTypography>
      <CardContainer sx={{marginTop:"2em"}}>
        <WalletCard>
          <Typography variant="h5" sx={{color:"#002a80",fontWeight:"700"}}>Revenue</Typography>
          <div className="moneyconatiner" style={{display:"flex", justifyContent:"space-between",marginTop:".2em"}}>
          <Typography variant="h6"  sx={{color:"#002a80",fontWeight:"800",fontSize:"2em"}}>80000</Typography>
         <div className='BoxColor' style={{  width: "24px",
  height: "24px",
  backgroundColor: "#4ED273",
  alignSelf: "flex-end",}}>

  </div>
          </div>
       
  <div className="colorsection" style={{ width: "380px",
  height: "50px",background:"#F2F2F2",marginLeft:"-2em", marginTop:".6em"}}>

  </div>
        </WalletCard>
        <WalletCard>
        <Typography variant="h5" sx={{color:"#002a80",fontWeight:"700"}}>Expense</Typography>
          <div className="moneyconatiner" style={{display:"flex", justifyContent:"space-between",marginTop:".2em"}}>
          <Typography variant="h6"  sx={{color:"#002a80",fontWeight:"800",fontSize:"2em"}}>50000</Typography>
         <div className='BoxColor' style={{  width: "24px",
  height: "24px",
  backgroundColor: "red",
  alignSelf: "flex-end",}}>

  </div>
          </div>
       
  <div className="colorsection" style={{ width: "380px",
  height: "50px",background:"#F2F2F2",marginLeft:"-2em", marginTop:".6em"}}>

  </div>
        </WalletCard>
        <div>
        <TestChart/>
        </div>
      </CardContainer>
    </Box>

        </div>
        <div className="ChartContainer">
          <ChartBar/>
          <ChartPie/>
        </div>
          
        </div>
      ) : (
        <div className="MobileScreen"style={{position:"relative" }}>
                 <MobileNav title="Dashboard" />
                 <div className="DashboardCard" style={{position:"absolute",top:"90px" }}>
        <Box sx={{ padding: "16px", marginBottom:"2em"}}>
      <HeaderTypography variant="h3">Analysis</HeaderTypography>
      <CardContainer sx={{marginTop:"2em", display:"flex", flexDirection:"column"}}>
        <WalletCard sx={{marginBottom:"1em",width:"340px"}}>
          <Typography variant="h5" sx={{color:"#002a80",fontWeight:"500"}}>Revenue</Typography>
          <div className="moneyconatiner" style={{display:"flex", justifyContent:"space-between",marginTop:".2em"}}>
          <Typography variant="h6"  sx={{color:"#002a80",fontWeight:"600",fontSize:"2em"}}>120000</Typography>
         <div className='BoxColor' style={{  width: "24px",
  height: "24px",
  backgroundColor: "#4ED273",
  alignSelf: "flex-end",}}>

  </div>
          </div>
       
  <div className="colorsection" style={{ width: "380px",
  height: "50px",background:"#F2F2F2",marginLeft:"-2em", marginTop:".3em"}}>

  </div>
        </WalletCard>
        <WalletCard sx={{marginBottom:"1em",width:"340px"}}>
        <Typography variant="h5" sx={{color:"#002a80",fontWeight:"700"}}>Expense</Typography>
          <div className="moneyconatiner" style={{display:"flex", justifyContent:"space-between",marginTop:".2em"}}>
          <Typography variant="h6"  sx={{color:"#002a80",fontWeight:"800",fontSize:"2em"}}>150,000</Typography>
         <div className='BoxColor' style={{  width: "24px",
  height: "24px",
  backgroundColor: "red",
  alignSelf: "flex-end",}}>

  </div>
          </div>
       
  <div className="colorsection" style={{ width: "380px",
  height: "50px",background:"#F2F2F2",marginLeft:"-2em", marginTop:".6em"}}>

  </div>
        </WalletCard>
        {/* <WalletCard sx={{marginBottom:"1em",width:"340px"}}>
        <Typography variant="h5" sx={{color:"#002a80",fontWeight:"700"}}>loss</Typography>
          <div className="moneyconatiner" style={{display:"flex", justifyContent:"space-between",marginTop:".2em"}}>
          <Typography variant="h6"  sx={{color:"#002a80",fontWeight:"800",fontSize:"2em"}}>30000</Typography>
         <div className='BoxColor' style={{  width: "24px",
  height: "24px",
  backgroundColor: "red",
  alignSelf: "flex-end",}}>

  </div>
          </div>
       
  <div className="colorsection" style={{ width: "380px",
  height: "50px",background:"#F2F2F2",marginLeft:"-2em", marginTop:".6em"}}>

  </div>
        </WalletCard> */}
      </CardContainer>
    </Box>

        </div>
        <div className="ChartContainer">
          <ChartBar/>
          <ChartPie/>
        </div>

        </div>
      )}

    </div>
  )
}

export default Dashboard