import React from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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
  { name: 'Jan', revenue: 5000, expense: 3000,  },
  { name: 'Feb', revenue: 6000, expense: 3500,  },
  { name: 'Mar', revenue: 4000, expense: 2000,  },
  { name: 'Apr', revenue: 4500, expense: 2800,  },
  { name: 'May', revenue: 5500, expense: 3200, },
  { name: 'Jun', revenue: 6500, expense: 3800,  },
  { name: 'Jul', revenue: 7000, expense: 4000, },
  { name: 'Aug', revenue: 4800, expense: 2500,   },
  { name: 'Sep', revenue: 5200, expense: 2900,  },
  { name: 'Oct', revenue: 5800, expense: 3300,  },
  { name: 'Nov', revenue: 6200, expense: 3600,  },
  { name: 'Dec', revenue: 6800, expense: 4100, },
];


const ChartBar = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div>


{isDesktop ? (
        <div style={{ position: "absolute", left: "335px", top: "320px", zIndex:"999" }}>
        <HeaderTypography variant="h3" style={{marginBottom:"1.5em"}}>Budget Analysis</HeaderTypography>
  
        <BarChart width={1000} height={400} data={data} style={{marginLeft:"-1.4em"}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#4ED273" name="Budget" />
          <Bar dataKey="expense" fill="#4287f5" name="Expense" />
        </BarChart>
      </div>
      ) : (
        <div style={{position:"relative",top:"700px" }}>
      <HeaderTypography variant="h3" style={{marginBottom:"1.5em",marginLeft:".5em"}}>Budget Analysis</HeaderTypography>

      <BarChart width={380} height={400} data={data} style={{marginLeft:"-1.2em"}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#4ED273" name="Revenue" />
        <Bar dataKey="expense" fill="#4287f5" name="Expense" />
      </BarChart>
    </div>
      )}
      
    </div>
  )
}

export default ChartBar