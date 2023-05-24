
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// // Styled component for the wallet card
// const WalletCard = styled(Card)`
//   width: 300px;
//   background-color: #ffffff;
//   border-radius: 8px;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

// // Styled component for the card content
// const CardContentWrapper = styled(CardContent)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 24px;
// `;

// const Wallet = () => {
//   const [balance, setBalance] = useState(0);

//   const handleIncome = () => {
//     setBalance(prevBalance => prevBalance + 100);
//   };

//   const handleExpense = () => {
//     setBalance(prevBalance => prevBalance - 50);
//   };

//   return (
//     <WalletCard>
//       <CardContentWrapper>
//         <Typography variant="h5" component="h2" gutterBottom>
//           My Wallet
//         </Typography>
//         <Typography variant="body1" color="textSecondary">
//           Available Balance
//         </Typography>
//         <Typography variant="h6" component="p">
//           ${balance}
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleIncome}>
//           Add Income
//         </Button>
//         <Button variant="contained" color="secondary" onClick={handleExpense}>
//           Add Expense
//         </Button>
//       </CardContentWrapper>
//     </WalletCard>
//   );
// };

// export default Wallet;
