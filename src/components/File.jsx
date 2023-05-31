import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Modal,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const BudgetScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [budgetName, setBudgetName] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBudget = {
      amount,
      description,
      category,
      budgetName,
    };

    setBudgets([...budgets, newBudget]);
    setAmount('');
    setDescription('');
    setCategory('');
    closeModal();
  };

  const handleAddBudget = () => {
    setBudgetName('');
    openModal();
  };

  return (
    <div>
      <h1>Budgeting Screen</h1>
      <Button variant="contained" onClick={handleAddBudget}>
        Add New Budget
      </Button>

      {budgets.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Budget Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {budgets.map((budget, index) => (
              <TableRow key={index}>
                <TableCell>{budget.budgetName}</TableCell>
                <TableCell>{budget.amount}</TableCell>
                <TableCell>{budget.description}</TableCell>
                <TableCell>{budget.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No budgets available.</p>
      )}

      <Modal open={showModal} onClose={closeModal}>
        <div className="modal">
          <div className="modal-content">
            <Button variant="contained" onClick={closeModal}>
              Close
            </Button>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Budget Name"
                value={budgetName}
                onChange={(e) => setBudgetName(e.target.value)}
                required
              />
              <TextField
                type="number"
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <FormControl required>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value="">Select Category</MenuItem>
                  <MenuItem value="Food">Food</MenuItem>
                  <MenuItem value="Utilities">Utilities</MenuItem>
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BudgetScreen;