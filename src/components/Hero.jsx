import React from "react";
import Nav from "./Nav";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import MobileBackground from "../assets/MobileImage.png";
import BackgroundImg from "../assets/BackgroundEllipse.svg";
import ActiveIcon from "../assets/Active.svg";
import ArrowIcon from "../assets/Arrow.svg";
import Budget from "../assets/Budgeting.svg";
import CardImg from "../assets/CardRevenue.svg";
import RevenueIcon from "../assets/Expenses.svg";
import BckImage from "../assets/GirlBng.png";
import { useNavigate } from "react-router-dom";

const ContainedButton = styled(Button)`
  background: #002a80;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1em;
  color: white;
  width: 150px;
`;
const OutlineButton = styled(Button)`
  background: #0dde6500;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: #002a80;
  width: 150px;
  border: 2px solid #002a80;
  margin-left: 1em;
`;

const HeaderTypography = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  line-height: 4px;
`;
const DesktopTypography = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 4em;
  line-height: 68px;
`;
const DesktopParagraph = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 500;
  font-size: 1em;
  margin-top: 1em;
`;

function Header() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Login");
  };
  const SignClick = () => {
    navigate("/Signup");
  };

  return (
    <div className="HeroSection">
      {isDesktop ? (
        <div className="DesktopScreen">
          <Nav />
          <div className="DesktopItems">
            <div className="DesktopText">
              <DesktopTypography variant="h1">
                {" "}
                Grow Your Business by the <span>Number</span>{" "}
              </DesktopTypography>
              <DesktopParagraph variant="h6">
                {" "}
                Manage all your money with ease from one place.One app for all
                SME.Track your income and expenses, analyze your financial
                habits and stick to your budgets
              </DesktopParagraph>

              <div className="MobileBtn">
                <ContainedButton
                  variant="contained"
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  onClick={handleClick}
                >
                  Log in
                </ContainedButton>
                <OutlineButton
                  variant="outlined"
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  onClick={SignClick}
                >
                  Sign Up
                </OutlineButton>
              </div>
            </div>
            <div className="DesktopImages">
              <div>
                <img src={ActiveIcon} alt="optimize logo" className="Img5" />
              </div>
              <div>
                <img src={ArrowIcon} alt="optimize logo" className="Img1" />
              </div>
              <div>
                <img src={Budget} alt="optimize logo" className="Img2" />
              </div>
              <div>
                <img src={RevenueIcon} alt="optimize logo" className="Img3" />
              </div>
              <div>
                <img src={BckImage} alt="optimize logo" className="Img6" />
              </div>
              <div>
                <img src={CardImg} alt="optimize logo" className="Img4" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="MobileScreen">
          <div className="MobileHeader">
            <HeaderTypography variant="h3">Opitrack</HeaderTypography>
            <img
              src={BackgroundImg}
              className="BackgroundCircle"
              alt="ellipse circle"
            />
          </div>
          <div className="MobileItems">
            <div className="CenterImg">
              <img src={MobileBackground} alt="optimize logo" />
            </div>
            <div>
              <h1>
                The only app that gets your money into <span>shape</span>
              </h1>
              <p>Create your wallet, we track all your transaction.</p>
            </div>
            <div className="MobileBtn">
              <ContainedButton
                variant="contained"
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                onClick={handleClick}
              >
                Log in
              </ContainedButton>
              <OutlineButton
                variant="outlined"
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                onClick={SignClick}
              >
                Sign Up
              </OutlineButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
