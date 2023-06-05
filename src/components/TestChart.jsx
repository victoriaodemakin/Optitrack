import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Expense from '../pages/Expense';
import Budgeting from '../pages/Budgeting';


const TestChart = ({ expenseData, budgetingData }) => {
  // Load expense data from local storage
  const storedExpense = localStorage.getItem('expense');
  const parsedExpense = storedExpense ? JSON.parse(storedExpense) : [];

  // Load budget data from local storage
  const storedBudget = localStorage.getItem('budgets');
  const parsedBudget = storedBudget ? JSON.parse(storedBudget) : [];

  // Combine expense and budget data into a single array for chart
  const chartData = [...parsedExpense, ...parsedBudget];

  return (
    <div style={{ position: "absolute", left: "335px", top: "1320px", zIndex:"999" }}>
      <h1>Dashboard</h1>
      <BarChart width={500} height={300} data={{expenseData}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default TestChart;
