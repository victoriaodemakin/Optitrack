import React, { useState } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;
`;

const TableRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: yellow;
`;

const TableCell = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
  padding: 8px;
`;

const Button = styled.button`
  margin-top: 1em;
  padding: 8px 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BudgetScreen = () => {
  const [budgets, setBudgets] = useState([]);

  // Rest of the component code...

  return (
    <div>
      <div className="TableContainer">
        <div className="TableRow">
        <div className='TableCell'>Budget Name</div>
          <div className='TableCell'>Amount</div>
          <div className='TableCell'>Description</div>
          <div className='TableCell'>Category</div>
          <div className='TableCell'>Delete/Edit</div>
        </div>
         
        {budgets.map((budget, index) => (

          <div className="TableRow" key={index}>
<div className='TableCell'>{budget.budgetName}</div>
            <div className='TableCell'>{`${budget.amount} ${budget.currency}`}</div>
            <div className='TableCell'>{budget.description}</div>
            <div className='TableCell'>{budget.category}</div>
            <div className='TableCell'>
                  <IconButton onClick={() => handleDelete(index)} sx={{color:"#002a80"}}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(index)} sx={{color:"#002a80"}}>
                    <EditIcon />
                  </IconButton>
                </div>
          </div>
            
        ))}
      </div>
        

      <Button onClick={handleSaveTable}>Save Table</Button>
    </div>
  );
};

export default BudgetScreen;
