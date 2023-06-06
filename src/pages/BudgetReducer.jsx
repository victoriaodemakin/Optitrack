// budgetReducer.js
const initialState = {
 budgetAmount: 0,
};

const budgetReducer = (state = initialState, action) => {
 switch (action.type) {
   case 'UPDATE_BUDGET_AMOUNT':
     return {
       ...state,
       budgetAmount: action.payload,
     };
   default:
     return state;
 }
};

export default budgetReducer;
