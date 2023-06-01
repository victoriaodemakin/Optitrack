import React, { useState } from "react";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import { styled } from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  
  Button,
  Modal,

  TextField as MuiTextField,
  Select as MuiSelect,
  MenuItem,
  FormControl,
  InputLabel,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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

const AltButton = styled(Button)`
  background: #0dde6500;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  color: #003BB3;
  width: 155px;
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

const Select = styled(MuiSelect)`
  .MuiSelect-root {
    border-radius: 8px;
    color: #002a80;
    background: red
    
  }
`;

const Simulation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAmountChange = (event) => {
    const { value } = event.target;
    // Only allow numeric input
    const numericValue = value.replace(/[^0-9]/g, '');
    setAmount(numericValue);
  };

  const handleCategoryDescriptionChange = (event) => {
    setCategoryDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddEntry = () => {
    const entry = {
      amount,
      categoryDescription,
      category,
    };

    setTableData([...tableData, entry]);

    // Clear form fields
    setAmount('');
    setCategoryDescription('');
    setCategory('');
  };

  const handleSubmit = () => {
    // Perform submit logic, e.g., send tableData to the backend

    // Clear tableData array
    setTableData([]);

    // Close the modal
    handleCloseModal();
  };

  const isDesktop = useMediaQuery("(min-width: 1024px)");
 
  return (
    <div>
      {isDesktop ? (
        <div className="DesktopScreen">
         <TopNav Title="Simulation" />
         <Sidebar/>
         <div className="DesktopSimulate"style={{ position: "absolute", left: "330px", top: "100px", zIndex:"999" }}>
         <div className="Container">
      <ContainedButton variant="contained" onClick={handleOpenModal} style={{marginBottom:"2.5em"}}>
        Simulate
      </ContainedButton>

      <Modal open={isOpen} onClose={handleCloseModal} sx={{background:"rgba(0,42,128,0.5)"}}>
        <div className="FormContainer" style={{
                background: "white",
                width: "50%",
                height: "70vh",
                margin:"2em 25em",
                padding: "2em 4em",
              }}>
        <div className="DesktopSignupForm" style={{marginBottom:"2em" }}>
          <h2>Add Entry</h2>   
    </div>
<div className="form" style={{display:"flex", flexDirection:"column", gap:4, margin:"1em 3.5em"}}>

<TextField
                type="number"
                label="Amount"
                value={amount}
            onChange={handleAmountChange}
            required
                sx={{ marginBottom: "15px", width: "450px", marginRight:"1em"}}
                size="small"
                fullWidth
              />


          <TextField
            label="Category Description"
            variant="outlined"
            value={categoryDescription}
            onChange={handleCategoryDescriptionChange}
            required
            sx={{ marginBottom: "15px", width: "450px",  }}
                size="small"
                fullWidth
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel style={{marginTop:"-1.9em",color:"#002a80", fontSize:".9em"}}>Category</InputLabel>
            <Select value={category} onChange={handleCategoryChange}
            sx={{ marginBottom: "9px", width: "450px", marginRight:"1.5em",padding:".1em 1em", marginTop:'-1em',color:"#002a80",    borderRadius: "8px", }}
            size="small"
            fullWidth>
              <MenuItem value="Simulate"
              > Simulate</MenuItem>
              
            </Select>
          </FormControl>
          <div style={{margin:"2em auto"}}>
          <ContainedButton variant="contained" onClick={handleAddEntry}startIcon={<AddIcon />}>
        Add More
      </ContainedButton>

      <AltButton variant="contained" color="primary" onClick={handleSubmit}  style={{marginLeft:"2em"}}>
        Sumbit
      </AltButton>
          </div>
</div>
    

          
       

        </div>
      </Modal>

      <TableContainer sx={{width:"100%"}}>
        <Table sx={{ marginBottom: "25px", width: "800px", margin:"1em 7em", height:"30px" }}>
          <TableHead>
            <TableRow sx={{ marginBottom: "25px", width: "600px", height:"30px" }}>
              <TableCell>Amount</TableCell>
              <TableCell>Category Description</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.amount}</TableCell>
                <TableCell>{entry.categoryDescription}</TableCell>
                <TableCell>{entry.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
         </div>
        </div>
      ) : (
        <div className="MobileScreen">
          <MobileNav/>
          <div className="DesktopScreen">
         <TopNav Title="Simulation" />
         <Sidebar/>
         <div className="DesktopSimulate"style={{ position: "absolute",  top: "80px", zIndex:"999" }}>
         <div className="Container">
      <ContainedButton variant="contained" onClick={handleOpenModal} style={{marginBottom:"2.5em", marginLeft:"1em"}}>
        Simulate
      </ContainedButton>

      <Modal open={isOpen} onClose={handleCloseModal} sx={{background:"rgba(0,42,128,0.5)"}}>
        <div className="FormContainer" style={{
                background: "white",
                width: "90%",
                height: "80vh",
                margin:"2em 1em",
                padding: "2em 1em",
              }}>
        <div className="DesktopSignupForm" style={{marginBottom:"2em" }}>
          <h2>Add Entry</h2>   
    </div>
<div className="form" style={{display:"flex", flexDirection:"column", gap:4, margin:"1em 1.5em"}}>

<TextField
                type="number"
                label="Amount"
                value={amount}
            onChange={handleAmountChange}
            required
                sx={{ marginBottom: "15px", width: "100%", marginRight:"1em"}}
                size="small"
                fullWidth
              />


          <TextField
            label="Category Description"
            variant="outlined"
            value={categoryDescription}
            onChange={handleCategoryDescriptionChange}
            required
            sx={{ marginBottom: "15px", width: "100%",  }}
                size="small"
                fullWidth
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel style={{marginTop:"-1.9em",color:"#002a80", fontSize:".7em"}}>Category</InputLabel>
            <Select value={category} onChange={handleCategoryChange}
            sx={{ marginBottom: "9px", width: "100%", marginRight:"1.5em",padding:".1em 1em", marginTop:'-1em',color:"#002a80",    borderRadius: "8px", }}
            size="small"
            fullWidth>
              <MenuItem value="Simulate"
              > Simulate</MenuItem>
              
            </Select>
          </FormControl>
          <div style={{margin:"2em auto"}}>
          <ContainedButton variant="contained" onClick={handleAddEntry}startIcon={<AddIcon />} style={{width:"150px"}}>
        Add More
      </ContainedButton>

      <AltButton variant="contained" color="primary" onClick={handleSubmit}  style={{marginLeft:"2em", width:"100px"}} >
        Sumbit
      </AltButton>
          </div>
</div>
    

          
       

        </div>
      </Modal>

      <TableContainer sx={{width:"100%"}}>
        <Table sx={{ marginBottom: "25px", width: "375px", margin:"1em 1em"}}>
          <TableHead>
            <TableRow >
              <TableCell>Amount</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.amount}</TableCell>
                <TableCell>{entry.categoryDescription}</TableCell>
                <TableCell>{entry.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
         </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default Simulation