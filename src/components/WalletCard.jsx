import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  top: 50px;
  background-color: #f5f5f5;
  margin: 10px 50px;
  `;

const CardComponent = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6">Wallet</Typography>
        <Typography variant="h4">876,567</Typography>
        <Typography variant="body1">21.5%</Typography>
      </CardContent>
    </StyledCard>
  ); 
};

export default CardComponent;
 