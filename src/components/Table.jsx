import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)`
  position: absolute;
  top: 60px; 
  left: 320px; 
  width:100%;
`;

const ExpensesComponent = () => {
  const expensesData = [
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
    { date: '2023-05-01', type: 'Capital', description: '48%', time: '10:00 AM', business: 'Tunde Malimi', category: '******', amount: 100 },
  ];

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Time Transaction</TableCell>
            <TableCell>Business Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesData.map((expense, index) => (
            <TableRow key={index}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.type}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.time}</TableCell>
              <TableCell>{expense.business}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ExpensesComponent;
