import React, { useState } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery"
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import { styled } from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import NoBudgetImg from '../assets/Nobugdet.svg'
import MobileBudgetImg from '../assets/cost 1.svg'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/SaveAlt';import FetchIcon from '@mui/icons-material/Preview';// import { styled as muiStyled } from '@mui/system';

import {
  Button,
  Table as MUITable,
  TableBody,
  TableCell , 
  TableHead,
  TableRow,
  TextField as MuiTextField,
  Modal,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,

} from '@mui/material';


const ContainedButton = styled(Button)`
  background: #003BB3;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1em;
  color: #ffffff;
  font-family: "Urbanist";
  height:"200px"
  box-shadow: none;
  &:hover {
    background-color: transparent;
    border: 2px solid #003BB3;
    color: #003BB3; 
    box-shadow: none;


  }
`;
const MobileTableCell = styled(TableCell)`
  && {
    white-space: wrap;
    overflow: hidden;
    text-overflow: inherit;
    max-width: 200px;
  }
`;

const OutlineButton = styled(Button)`
  background: #0dde6500;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  color: #003BB3;
  width: 150px;
  border: 2px solid #003BB3;
  box-shadow: none;
  font-family: "Urbanist";
  &:hover {
    background-color: #1E40AF;
    border: none;
    color: white; 
    box-shadow: none;
    padding: .6em;
  }
`;

const AltButton = styled(Button)`
  background: #0dde6500;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  color: #003BB3;
  width: 180px;
  border: 2px solid #0dde65;
  box-shadow: none;
  font-family: "Urbanist";
  &:hover {
    background-color: #0dde65;
    border: none;
    color: #003BB3; 
    box-shadow: none;
    padding: .6em;


  }

`;
const TextField = styled(MuiTextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    color: #002a80;

    &:hover fieldset {
      border-color: #002a80;
    }
    &.Mui-focused fieldset {
      border-color: #002a80;
    }
  }
  .MuiFormLabel-root {
    color: #002a80;
    font-size: 12px;
    font-family: inter;
  }
  .MuiInputBase-input {
    color: #002a80;
  }
  fieldset {
    border-color: #002a80;
    margin-top: -0.4em;
  }
`;
const CurrencySelect = styled(Select)`
border:1px solid #002a80 ;
&:focus {
  input {
    color: red;
  }
}
`
const Table = styled(MUITable)`


th {
    color: #666666;
    text-align: center;
    height:30px
    width:40%


  }
  td {
    text-align: center;
    height: 10px;
    color: #666666;
  }
  tr:nth-child(even) {
    background-color: #FAFCFF;
  }

  tr:nth-child(odd) {
    background-color: #FAFCFF;
    text-align: center;

  }
 
`;



const Budgeting = () => {
  const [showModal, setShowModal] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [budgetName, setBudgetName] = useState('');
  const [currency, setCurrency] = useState('NGN'); // Default currency is Naira

  const [editingIndex, setEditingIndex] = useState(null);
  const [editAmount, setEditAmount] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editCategory, setEditCategory] = useState('');

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
      currency,
    };

    setBudgets([...budgets, newBudget]);
    setAmount('');
    setDescription('');
    setCategory('');
    setCurrency('NGN')
    closeModal();

  };
  const handleSaveTable = () => {
    // Code to save the table to the database
    console.log('Table saved to the database');
  };
  const handleFetchTable = () => {
    // Code to fetch the table from the database
    console.log('Table fetched from the database');
  };

  const handleAddBudget = () => {
    setBudgetName('');
    openModal();
  };

  const handleDelete = (index) => {
    const updatedBudgets = [...budgets];
    updatedBudgets.splice(index, 1);
    setBudgets(updatedBudgets);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const budget = budgets[index];
    setEditAmount(budget.amount);
    setEditDescription(budget.description);
    setEditCategory(budget.category);
    setCurrency(budget.currency)
    openModal();
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedBudgets = [...budgets];
    updatedBudgets[editingIndex] = {
      amount: editAmount,
      description: editDescription,
      category: editCategory,
      budgetName,
      currency,
    };

    setBudgets(updatedBudgets);
    setEditingIndex(null);
    setEditAmount('');
    setEditDescription('');
    setEditCategory('');
    closeModal();
  };

 const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className='BudgetScreen'>
      {isDesktop ? (
      <div className="DesktopScreen" style={{position:"relative"}}>
        <TopNav Title="Budgeting" />
        <Sidebar />
        <div className="DesktopBudget" style={{ position: "absolute", left: "330px", top: "80px", zIndex:"999" }}>
        <div>
          
          <div className="BtnContainer" style={{marginBottom:"2em"}}>
          <div className="Btns">
          <ContainedButton variant="contained" onClick={handleAddBudget}startIcon={<AddIcon />}>
        Add New Budget
      </ContainedButton>
          <AltButton variant="contained" color="primary" startIcon={<FetchIcon  style={{color:"003BB3"}}/>} onClick={handleFetchTable}  style={{marginRight:"28em", marginLeft:"2em"}}>
        Fetch Budget
      </AltButton>
          </div>

      <OutlineButton variant="contained" onClick={handleAddBudget}>
Simulation      
</OutlineButton>
          </div>
   

      {budgets.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow   sx={{ marginBottom: "25px", width: "600px", height:"30px" }}>
              <TableCell  sx={{height:"20px", padding:".5em"}}>Budget Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Delete/Edit</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {budgets.map((budget, index) => (
              <TableRow key={index} >
                <TableCell >{budget.budgetName}</TableCell>
                <TableCell>{`${budget.amount} ${budget.currency}`}</TableCell>
                <TableCell>{budget.description}</TableCell>
                <TableCell>{budget.category}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(index)} sx={{color:"#002a80"}}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(index)} sx={{color:"#002a80"}}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <ContainedButton variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveTable} style={{marginTop:"9em"}}>
        Save Table
      </ContainedButton>
        </Table>
        
       
        
      ) : (
<div className="NoBudget">
<img src={NoBudgetImg} alt="desktop color logo" style={{width:"60%", margin:"2em 8em", }}/>
<p style={{color: "#002a80",
  fontFamily: "Urbanist",fontWeight: "500",
  fontSize:"1em", margin:"-5em 24em 1em 24em"
}}>No Budget Available</p>
</div>     

)}

      <Modal open={showModal} onClose={closeModal}sx={{background:"rgba(0,42,128,0.5)"}} >
        <div className="modal">
          <div className="ModalContent" style={{
                background: "white",
                width: "60%",
                height: "90vh",
                margin: " 2em auto",
                padding: "2em 7em",
              }}>
            <div className="formConatiner">
            <div className="DesktopSignupForm" style={{marginBottom:"2em"}}>
          <h2>Create a Budget</h2>
          <p>Create your wallet, Create your budget, We do the Tracking </p>
          
    </div>
            <form onSubmit={editingIndex !== null ? handleUpdate : handleSubmit} style={{display:"flex", flexDirection:"column", gap:7}}>
              <TextField
                label="Budget Name"
                value={budgetName}
                onChange={(e) => setBudgetName(e.target.value)}
                required
                sx={{ marginBottom: "10px", width: "569px", marginTop: "1em" }}
                size="small"
                fullWidth
              />
              <div className="AmountContainer">
              <TextField
                type="number"
                label="Amount"
                value={editingIndex !== null ? editAmount : amount}
                onChange={(e) => {
                  if (editingIndex !== null) {
                    setEditAmount(e.target.value);
                  } else {
                    setAmount(e.target.value);
                  }
                }}
                required
                sx={{ marginBottom: "10px", width: "450px", marginRight:"1em"}}
                size="small"
                fullWidth
              />
              <CurrencySelect
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ marginBottom: "9px", width: "100px", marginRight:"1.5em",padding:".1em", marginTop:'-.4em',color:"#002a80",    borderRadius: "8px",
            }}
                size="small"
                fullWidth
            >
              <MenuItem value="NGN">NGN</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </CurrencySelect>
              </div>
             
              <TextField
                label="Description"
                value={editingIndex !== null ? editDescription : description}
                onChange={(e) => {
                  if (editingIndex !== null) {
                    setEditDescription(e.target.value);
                  } else {
                    setDescription(e.target.value);
                  }
                }}
                required
                sx={{ marginBottom: "10px", width: "569px"}}
                size="small"
                fullWidth
              />
              <FormControl required>
                <InputLabel>Category</InputLabel>
                <Select
                  value={editingIndex !== null ? editCategory : category}
                  onChange={(e) => {
                    if (editingIndex !== null) {
                      setEditCategory(e.target.value);
                    } else {
                      setCategory(e.target.value);
                    }
                  }}
                  sx={{ marginBottom: "10px", width: "569px",padding:".3em 0"}}
                  size="small"
                  fullWidth>
                  <MenuItem value="">Select Category</MenuItem>
                  <MenuItem value="Cost of Sales">Cost of Sales</MenuItem>
                  <MenuItem value="Salary">Salary</MenuItem>
                  <MenuItem value="Selling">Selling</MenuItem>
                  <MenuItem value="General">General</MenuItem>
                  <MenuItem value="Admin Expenses">Admin Expenses</MenuItem>
                  <MenuItem value="Miscellenous">Miscellenous</MenuItem>
                  
                </Select>
                
              </FormControl>

              <div className="ModalCta" style={{margin:"3em auto"}}>
              <ContainedButton variant="contained" onClick={closeModal} sx={{width:"150px", marginRight:"2em", padding:".7em"}}>
              Close
            </ContainedButton>
              <OutlineButton type="submit" variant="contained">
              {editingIndex !== null ? 'Update' : 'Submit'}
              </OutlineButton>
              </div>
            </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
        </div>
       


        </div>
    ) : (
      <div className="MobileScreen" style={{width:"100%"}}>
        <MobileNav title="Budgeting" />
       
        
        <div className="MobileBudget" style={{ position: "absolute",top: "80px", zIndex:"999", padding:"1em", width:"100%"}}>
        <div>
          
          <div className="BtnContainer" style={{ display:"flex", justifyContent:"space-between",width:"100%"}}>
          <ContainedButton variant="contained" onClick={handleAddBudget}startIcon={<AddIcon />} style={{width:"165px", marginBottom:"2em"}}>
        add Budget
      </ContainedButton>
          <AltButton variant="contained" color="primary" startIcon={<FetchIcon  style={{color:"003BB3"}}/>} onClick={handleFetchTable}  style={{width:"165px", marginBottom:"2em",marginLeft:".3em"}}>
        get Budget
      </AltButton>
      
          </div>
   

      {budgets.length > 0 ? (
      //   <table>
      //  <thead>
      //     <tr className="table-head-row">
      //       <th className="table-head-cell">Budget Name</th>
      //       <th className="table-head-cell">Amount</th>
      //       <th className="table-head-cell">Description</th>
      //       <th className="table-head-cell">Category</th>
      //       <th className="table-head-cell">Delete/Edit</th>
      //     </tr>
      //   </thead>
         
      //   <tbody>
      //     {budgets.map((budget, index) => (
      //       <tr key={index} className="table-row">
      //         <td className="table-cell">{budget.budgetName}</td>
      //         <td className="table-cell">{`${budget.amount} ${budget.currency}`}</td>
      //         <td className="table-cell">{budget.description}</td>
      //         <td className="table-cell">{budget.category}</td>
      //         <td className="table-cell">
      //         <IconButton onClick={() => handleDelete(index)} sx={{color:"#002a80"}}>
      //               <DeleteIcon />
      //             </IconButton>
      //             <IconButton onClick={() => handleEdit(index)} sx={{color:"#002a80"}}>
      //               <EditIcon />
      //             </IconButton>
      //         </td>
      //       </tr>
      //     ))}
      //   </tbody>
      //   </table>
 
      
        <Table sx={{maxWidth:"auto", }}>
          <TableHead>
            <TableRow   sx={{ marginBottom: "25px",maxWidth:"50%",background:"red" }}>
              <MobileTableCell  sx={{height:"20px"}}>Budget Name</MobileTableCell>
              <MobileTableCell>Amount</MobileTableCell>
              <MobileTableCell>Description</MobileTableCell>
              <MobileTableCell>Category</MobileTableCell>
              <MobileTableCell>Delete/Edit</MobileTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {budgets.map((budget, index) => (
              <TableRow key={index} >
                <MobileTableCell >{budget.budgetName}</MobileTableCell>
                <MobileTableCell>{`${budget.amount} ${budget.currency}`}</MobileTableCell>
                <MobileTableCell>{budget.description}</MobileTableCell>
                <MobileTableCell>{budget.category}</MobileTableCell>
                <MobileTableCell>
                  <IconButton onClick={() => handleDelete(index)} sx={{color:"#002a80"}}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(index)} sx={{color:"#002a80"}}>
                    <EditIcon />
                  </IconButton>
                </MobileTableCell>
              </TableRow>
            ))}
          </TableBody>
          <ContainedButton variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveTable} style={{marginTop:"9em", width:"168px"}}>
        Save Table
      </ContainedButton>
        </Table>
        
       
        
      ) : (
<div className="NoBudget" style={{position:"relative", display:"flex",flexDirection:"column", justifyContent:"center", alignContent:"center"}}>
<img src={MobileBudgetImg} alt="desktop color logo" style={{width:"80%",margin:"6em auto 2em 5em "}}/>
<p style={{color: "#002a80",
  fontFamily: "Urbanist",fontWeight: "500",margin:"0 auto"
  // fontSize:"1em",position:"absolute", top:"300px", left:"6em",marginBottom:"9em"
}}>No Budget Available</p>
</div>     

)}

      <Modal open={showModal} onClose={closeModal}sx={{background:"rgba(0,42,128,0.5)"}} >
        <div className="modal">
          <div className="ModalContent" style={{
                background: "white",
                width: "92%",
                height: "120vh",
                margin: "2em 1em",
                padding: "2em 1em",
              }}>
            <div className="formConatiner">
            <div className="DesktopSignupForm" style={{marginBottom:"2em"}}>
          <h2>Create a Budget</h2>
          <p>Create your wallet, Create your budget, We do the Tracking </p>
          
    </div>
            <form onSubmit={editingIndex !== null ? handleUpdate : handleSubmit} style={{display:"flex", flexDirection:"column", gap:7}}>
              <TextField
                label="Budget Name"
                value={budgetName}
                onChange={(e) => setBudgetName(e.target.value)}
                required
                sx={{ marginBottom: "15px", width: "100%", marginTop: "1em" }}
                size="small"
                fullWidth
              />
              <div className="AmountContainer">
              <TextField
                type="number"
                label="Amount"
                value={editingIndex !== null ? editAmount : amount}
                onChange={(e) => {
                  if (editingIndex !== null) {
                    setEditAmount(e.target.value);
                  } else {
                    setAmount(e.target.value);
                  }
                }}
                required
                sx={{ marginBottom: "15px", width: "60%", marginRight:"1.6em"}}
                size="small"
                fullWidth
              />
              <CurrencySelect
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ marginBottom: "9px", width: "30%",padding:".1em", marginTop:'-.4em',color:"#002a80",    borderRadius: "8px",
            }}
                size="small"
                fullWidth
            >
              <MenuItem value="NGN">NGN</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </CurrencySelect>
              </div>
             
              <TextField
                label="Description"
                value={editingIndex !== null ? editDescription : description}
                onChange={(e) => {
                  if (editingIndex !== null) {
                    setEditDescription(e.target.value);
                  } else {
                    setDescription(e.target.value);
                  }
                }}
                required
                sx={{ marginBottom: "15px", width: "100%"}}
                size="small"
                fullWidth
              />
              <FormControl required>
                <InputLabel>Category</InputLabel>
                <CurrencySelect
                  value={editingIndex !== null ? editCategory : category}
                  onChange={(e) => {
                    if (editingIndex !== null) {
                      setEditCategory(e.target.value);
                    } else {
                      setCategory(e.target.value);
                    }
                  }}
                  sx={{ marginBottom: "10px", width: "100%",padding:".3em 0"}}
                  size="small"
                  fullWidth>
                  <MenuItem value="">Select Category</MenuItem>
                  <MenuItem value="Cost of Sales">Cost of Sales</MenuItem>
                  <MenuItem value="Salary">Salary</MenuItem>
                  <MenuItem value="Selling">Selling</MenuItem>
                  <MenuItem value="General">General</MenuItem>
                  <MenuItem value="Admin Expenses">Admin Expenses</MenuItem>
                  <MenuItem value="Miscellenous">Miscellenous</MenuItem>
                  
                </CurrencySelect>
                
              </FormControl>

              <div className="ModalCta" style={{margin:"3em auto"}}>
              <ContainedButton variant="contained" onClick={closeModal} sx={{width:"100px", marginRight:"1em", padding:".5em"}}>
              Close
            </ContainedButton>
              <OutlineButton type="submit" variant="contained" sx={{width:"100px", marginRight:"1em", padding:".5em"}}>
              {editingIndex !== null ? 'Update' : 'Submit'}
              </OutlineButton>
              </div>
            </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
        </div>
       


        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    )}
    
    






















    </div>
  )
}

export default Budgeting