import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  
} from "recharts";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";



const HeaderTypography = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  line-height: 4px;
  margin-left: -1em
  margin-bottom
`;

const data = [
  { name: "Jan", revenue: 5000, expense: 3000, loss: 2000 },
  { name: "Feb", revenue: 6000, expense: 3500, loss: 2500 },
  { name: "Mar", revenue: 4000, expense: 2000, loss: 3000 },
  { name: "Apr", revenue: 4500, expense: 2800, loss: 2200 },
  { name: "May", revenue: 5500, expense: 3200, loss: 1800 },
  { name: "Jun", revenue: 6500, expense: 3800, loss: 2700 },
  { name: "Jul", revenue: 7000, expense: 4000, loss: 3200 },
  { name: "Aug", revenue: 4800, expense: 2500, loss: 2300 },
  { name: "Sep", revenue: 5200, expense: 2900, loss: 2800 },
  { name: "Oct", revenue: 5800, expense: 3300, loss: 2600 },
  { name: "Nov", revenue: 6200, expense: 3600, loss: 2000 },
  { name: "Dec", revenue: 6800, expense: 4100, loss: 2400 },
];


const ChartPie = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
{isDesktop ? (
   <div style={{ position: "absolute", left: "330px", top: "800px", zIndex:"999" }}>
   <div>
   <HeaderTypography variant="h3" style={{marginBottom:"1.5em", marginLeft:"1em"}}>Monthly Inflow</HeaderTypography>
     <LineChart width={1000} height={400} data={data}>
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Tooltip />
       <Legend />
       <Line
         type="monotone"
         dataKey="revenue"
         stroke="#4ED273"
         name="Revenue"
       />
       <Line
         type="monotone"
         dataKey="expense"
         stroke="#4287f5"
         name="Expense"
       />
       <Line type="monotone" dataKey="loss" stroke="#ff4136" name="Loss" />
     </LineChart>
   </div>
  
 </div>
      
      ) : (
        <div >
        <div style={{position:"relative",top:"750px" }}>
        <HeaderTypography variant="h3" style={{marginBottom:"1.5em", marginLeft:"1em"}}>Monthly Inflow</HeaderTypography>
          <LineChart width={380} height={400} data={data} style={{marginLeft:"-1.2em"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4ED273"
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#4287f5"
              name="Expense"
            />
            <Line type="monotone" dataKey="loss" stroke="#ff4136" name="Loss" />
          </LineChart>
        </div>
       
      </div>
       
      )}



     
    </div>
  );
};

export default ChartPie;
