import React from "react";
import { AppBar, Toolbar, Typography} from "@mui/material";
import Logo from "../assets/Logo.png";
import { styled } from "@mui/material/styles";

const Container = styled(AppBar)`
  height: 60px;
  width: 100%;
  background: #0dde6500;
  border: none;
  box-shadow: none;
  justif
`;
const Tooldiv = styled(Toolbar)`
  display: "flex";
  flex-direction: "row";
  width:"20%"
`;

const HeaderTypography = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  line-height: 4px;
  margin-left: -51em;
`;

const Nav = () => {
  return (
    <div>
      <Container>
        <Tooldiv>
          <div
            className="HeaderContainer">
            <div className="logo">
              <img src={Logo} alt="optimize logo" />

            </div>
            
            <div className="LogoLetter">
            <HeaderTypography variant="h3">Optimize</HeaderTypography>

            </div>
          </div>
        </Tooldiv>
      </Container>
    </div>
  );
};

export default Nav;
