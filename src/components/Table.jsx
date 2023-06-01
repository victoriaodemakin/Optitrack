import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)`
  top: 60px; 
  left: 320px; 
  width:90%;
`;

const ExpensesComponent = () => {
  const expensesData = [
    {  categorydescription: '48%', category: '******', amount: 100 },
    {  categorydescription: '48%', category: '******', amount: 100 },
    {  categorydescription: '48%', category: '******', amount: 100 },
    {  categorydescription: '48%', category: '******', amount: 100 },
    {  categorydescription: '48%', category: '******', amount: 100 },
    {  categorydescription: '48%', category: '******', amount: 100 },
    {  categorydescription: '48%', category: '******', amount: 100 },
    {  categorydescription: '48%', category: '******', amount: 100 },
    {  categorydescription: '48%', category: '******', amount: 100 },
  ];

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Categorydescription</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesData.map((expense, index) => (
            <TableRow key={index}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.categorydesription}</TableCell>  
              <TableCell>{expense.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ExpensesComponent;
