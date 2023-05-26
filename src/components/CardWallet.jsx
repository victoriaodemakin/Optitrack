// import React, { useState } from 'react';
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import { styled } from "@mui/material/styles";
// import { Form } from 'react-router-dom';

// const CardWallet = () => {
//   const [balance, setBalance] = useState(0);
//   const [transactions, setTransactions] = useState([]);

//   const handleTransaction = (transaction) => {
//     const updatedBalance = balance + transaction.amount;
//     setBalance(updatedBalance);
//     setTransactions([...transactions, transaction]);
//   };

//   return (
//     <Card>
//       <CardHeader title="Account Wallet" />
//       <CardContent>
//         <h3>Balance: {balance}</h3>

//         <TransactionTable transactions={transactions} />

//         <TransactionForm onTransaction={handleTransaction} />
//       </CardContent>
//     </Card>
//   );
// };

// const TransactionTable = ({ transactions }) => {
//   return (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>Name</TableCell>
//           <TableCell>Amount</TableCell>
//           <TableCell>Business ID</TableCell>
//           <TableCell>Category Description</TableCell>
//           <TableCell>Transaction ID</TableCell>
//           <TableCell>Category</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {transactions.map((transaction, index) => (
//           <TableRow key={index}>
//             <TableCell>{transaction.name}</TableCell>
//             <TableCell>{transaction.amount}</TableCell>
//             <TableCell>{transaction.businessId}</TableCell>
//             <TableCell>{transaction.categoryDescription}</TableCell>
//             <TableCell>{transaction.transactionId}</TableCell>
//             <TableCell>{transaction.category}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// const TransactionFormContainer = styled(Form)`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const TransactionForm = ({ onTransaction }) => {
//   const [name, setName] = useState('');
//   const [amount, setAmount] = useState(0);
//   const [businessId, setBusinessId] = useState('');
//   const [categoryDescription, setCategoryDescription] = useState('');
//   const [transactionId, setTransactionId] = useState('');
//   const [category, setCategory] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const transaction = {
//       name,
//       amount,
//       businessId,
//       categoryDescription,
//       transactionId,
//       category,
//     };
//     onTransaction(transaction);
//     setName('');
//     setAmount(0);
//     setBusinessId('');
//     setCategoryDescription('');
//     setTransactionId('');
//     setCategory('');
//   };

//   return (
//     <TransactionFormContainer onSubmit={handleSubmit}>
//       <TextField
//         label="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <TextField
//         label="Amount"
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(Number(e.target.value))}
//       />
//       <TextField
//         label="Business ID"
//         value={businessId}
//         onChange={(e) => setBusinessId(e.target.value)}
//       />
//       <TextField
//         label="Category Description"
//         value={categoryDescription}
//         onChange={(e) => setCategoryDescription(e.target.value)}
//       />
//       <TextField
//         label="Transaction ID"
//         value={transactionId}
//         onChange={(e) => setTransactionId(e.target.value)}
//       />
//       <Select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         displayEmpty
//         renderValue={(selected) =>
//           selected ? selected : <em>Select category</em>
//         }
//       >
//         <MenuItem value="Expense">Expense</MenuItem>
//         <MenuItem value="Income">Income</MenuItem>
//         <MenuItem value="Transfer">Transfer</MenuItem>
//       </Select>
//       <Button type="submit" variant="contained" color="primary">
//         Add Transaction
//       </Button>
//     </TransactionFormContainer>
//   );
// };

<form onSubmit={handleSignup}>
<div>               
<TextField
 label="Firstname"
 type="name"
 fullWidth
 margin="normal"
 autoComplete="name"
 autoFocus
 required
 id="firstName"
 value={firstName}
 onChange={handleFirstNameChange}
/> 
</div>
    <TextField
    label="Lastname"
    type="name"
    fullWidth
    margin="normal"
     autoComplete="name"
     required
     id="lastName"
     value={lastName}
    onChange={handleLastNameChange}/>
           <div>
           <TextField
             label="Email"
             type="email"
             fullWidth
             margin="normal"
             autoComplete="email"
             autoFocus
             required
             id="email"
             value={email}
             onChange={handleEmailChange}
          
           />
           </div>
           <div>
           <TextField
             label="Password"
             type="password"
             fullWidth
             margin="normal"
             required
             id="password"
             autoComplete="current-password"
             value={password}
             onChange={handlePasswordChange}
             
           />
           </div>
           <div>
           <TextField
             label="Confirm Password"
             type="password"
             fullWidth
             margin="normal"
             required
             id="password"
             autoComplete="current-password"
             value={confirmPassword}
             onChange={handleConfirmPasswordChange}
           />
           </div>
           <div className="MobileBtn">
             <OutlineButton
               variant="outlined"
               sx={{ textTransform: "capitalize", fontWeight: "bold" }}
             >
               Sign Up
             </OutlineButton>
           </div>
           <div style={{margin:"-2em 2em"}}>
       <label style={{color:"#002a80",fontSize:"0.8em",fontFamily:"Inter",}}>
         <input style={{  textAlign:"right",
         margin:"1em 1em",color:"#002a80"}}
           type="checkbox"
           id="termsCheckbox"
           checked={Agree}
           onChange={handleCheckboxChange}
         />
        I agree to all Terms and Conditions </label>
     </div>
</form>


import React, { useState } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import MobileLogo2 from "../assets/DesktopColorLogo.svg";
import BlueEllipse from "../assets/BackgroundEllipse.svg";
import { Button, TextField as MuiTextField } from "@mui/material";



// const ContainedButton = styled(Button)`
//   background: #002a80;
//   border-radius: 4px;
//   font-weight: 500;
//   font-size: 1em;
//   color: white;
//   width: 150px;
// `;

const OutlineButton = styled(Button)`
  background: #002a80;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  color: #ffffff;
  width: 100%;
  border: 2px solid #002a80;
`;

const HeaderTypography = styled(Typography)`
  color: #ffffff;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 3em;
  line-height: 4px;
  margin-left: 1em;
  text-align: center;
  position:absolute;
  bottom: -50px;
`;
const TextField = styled(MuiTextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    color:  #002a80; 
    &:hover fieldset {
      border-color: #002a80;
    }
    &.Mui-focused fieldset {
      border-color: #002a80; 
    }
  }
  .MuiFormLabel-root {
    color: #002a80; 
  }
  .MuiInputBase-input {
    color: #002a80; 
  }
  fieldset {
    border-color: #002a80;
  }
`;



const TextArea = styled(MuiTextField)`
.MuiOutlinedInput-root {
  border-radius: 8px;
  color:  #002a80; 
  &:hover fieldset {
    border-color:#002a80;
  }
  &.Mui-focused fieldset {
    border-color: #002a80; 
  }
}
.MuiFormLabel-root {
  color: #002a80; 
}
.MuiInputBase-input {
  color: #002a80;
}
fieldset {
  border-color: #002a80;
}
`




 


// const ContainedButton = styled(Button)`
//   background: #002a80;
//   border-radius: 4px;
//   font-weight: 500;
//   font-size: 1em;
//   color: white;
//   width: 150px;
// `;

const OutlineButton = styled(Button)`
  background: #002a80;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  color: #ffffff;
  width: 100%;
  border: 2px solid #002a80;
`;

const HeaderTypography = styled(Typography)`
  color: #ffffff;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 3em;
  line-height: 4px;
  margin-left: 1em;
  text-align: center;
  position:absolute;
  bottom: -50px;
`;
const TextField = styled(MuiTextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    color:  #002a80; 
    &:hover fieldset {
      border-color: #002a80;
    }
    &.Mui-focused fieldset {
      border-color: #002a80; 
    }
  }
  .MuiFormLabel-root {
    color: #002a80; 
  }
  .MuiInputBase-input {
    color: #002a80; 
  }
  fieldset {
    border-color: #002a80;
  }
`;



const TextArea = styled(MuiTextField)`
.MuiOutlinedInput-root {
  border-radius: 8px;
  color:  #002a80; 
  &:hover fieldset {
    border-color:#002a80;
  }
  &.Mui-focused fieldset {
    border-color: #002a80; 
  }
}
.MuiFormLabel-root {
  color: #002a80; 
}
.MuiInputBase-input {
  color: #002a80;
}
fieldset {
  border-color: #002a80;
}

// export default CardWallet;
