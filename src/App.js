import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home';
import SignIn from "./pages/SignIn"
import Expense from "./pages/Expense"
import Profile from './pages/Profile';
import Budgeting from './pages/Budgeting'
import Simulation from './pages/Simulation'
import Dashboard from './pages/Dashboard'


function App() {
  return (
<div>

<Routes>
          <Route excat path="/" element={<Home />} />
          <Route excat path="/Login" element={<Login />} />
          <Route excat path="/SignIn" element={<SignIn />} />
          <Route excat path="/Expense" element={<Expense />} />
          <Route excat path="/Revenue" element={<Expense />} />
          <Route excat path="/Profile" element={<Profile />} />
          <Route excat path="/Budgeting" element={<Budgeting />} />
          <Route excat path="/Simulation" element={<Simulation />} />
          <Route excat path="/Dashboard" element={<Dashboard />} />

          
        </Routes>

  {/* <Home/>
  <Login/> */}
</div>
      

  );
}

export default App;
