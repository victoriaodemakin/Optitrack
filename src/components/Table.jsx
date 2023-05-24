import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, TextField, Button } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/material';
const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 600,
    margin: '0 auto',
  },
  expenseInput: {
    marginRight: 10,
  },
  addButton: {
    marginTop: 10,
  },
});

const ExpenseTable = () => {
  const classes = useStyles();
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };

  const addExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({
      description: '',
      amount: '',
    });
  };

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <TextField
          name="description"
          label="Description"
          value={newExpense.description}
          onChange={handleInputChange}
          className={classes.expenseInput}
        />
        <TextField
          name="amount"
          label="Amount"
          value={newExpense.amount}
          onChange={handleInputChange}
          className={classes.expenseInput}
        />
        <Button variant="contained" color="primary" onClick={addExpense} className={classes.addButton}>
          Add Expense
        </Button>
      </div>
    </div>
  );
};

export default ExpenseTable;
