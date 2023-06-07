// expenseReducer.js
const initialState = {
 expenseAmount: 0,
};

const expenseReducer = (state = initialState, action) => {
 switch (action.type) {
   case 'UPDATE_EXPENSE_AMOUNT':
     return {
       ...state,
       expenseAmount: action.payload,
     };
   default:
     return state;
 }
};

export default expenseReducer;
