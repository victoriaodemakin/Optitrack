// import React, { createContext, useState } from 'react';

// const AmountContext = createContext();

// const AmountProvider = ({ children }) => {
//   const [expenseAmount, setExpenseAmount] = useState(0);
//   const [budgetAmount, setBudgetAmount] = useState(0);

//   const handleExpenseAmountChange = (amount) => {
//     setExpenseAmount(amount);
//   };

//   const handleBudgetAmountChange = (amount) => {
//     setBudgetAmount(amount);
//   };

//   const contextValue = {
//     expenseAmount,
//     budgetAmount,
//     handleExpenseAmountChange,
//     handleBudgetAmountChange,
//   };

//   return (
//     <AmountContext.Provider value={contextValue}>
//       {children}
//     </AmountContext.Provider>
//   );
// };

// export { AmountContext, AmountProvider };
import React, { createContext, useState } from 'react';

export const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const [expenseData, setExpenseData] = useState([]);
  const [budgetData, setBudgetData] = useState([]);

  return (
    <AmountContext.Provider value={{ expenseData, setExpenseData, budgetData, setBudgetData }}>
      {children}
    </AmountContext.Provider>
  );
};
