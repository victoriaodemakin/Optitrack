// import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Typography, Button,Card,CardContent
} from "@mui/material";
import { styled } from "@mui/material/styles";


const WalletCard = styled(Card)`
  width: 300px;
  background-color:blue ;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

// Styled component for the card content
const CardContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;


const CardWallet = () => {
  const [balance, setBalance] = useState(0);

  const handleIncome = () => {
    setBalance(prevBalance => prevBalance + 100);
  };

  const handleExpense = () => {
    setBalance(prevBalance => prevBalance - 50);
  };
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div style={{position:'absolute',zIndex:"9999"}}>
      {isDesktop ? (
          <WalletCard>
          <CardContentWrapper>
            <Typography variant="h5" component="h2" gutterBottom>
              My Wallet
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Available Balance
            </Typography>
            <Typography variant="h6" component="p">
              ${balance}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleIncome}>
              Add Income
            </Button>
            <Button variant="contained" color="secondary" onClick={handleExpense}>
              Add Expense
            </Button>
          </CardContentWrapper>
        </WalletCard>
      ) : ( 
        <h1>This is the expense page.</h1>
      )}
    </div>
  )
}

export default CardWallet







