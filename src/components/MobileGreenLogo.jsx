import React from 'react'
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import BlueMobileCircle from "../assets/MobileGreenCircle.svg"


const HeaderTypography = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  line-height: 4px;
`;

const MobileLogo = () => {
  return (
<div className="MobileHeader" style={{padding: "1em", marginLeft:"-1em"}} >
            <HeaderTypography variant="h3">Opitrack</HeaderTypography>
            <img
              src={BlueMobileCircle}
              className="BlueBackgroundCircle"
              alt="ellipse circle" style={{marginRight:"-2em",marginTop:"-3em"}}
            />
          </div>  )
}

export default MobileLogo