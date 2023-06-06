// reducers/index.js
import { combineReducers } from 'redux';
import expenseReducer from './ExpenseReducer';
import budgetReducer from './BudgetReducer';


const rootReducer = combineReducers({
  expense: expenseReducer,
  budget: budgetReducer,
});

export default rootReducer;
