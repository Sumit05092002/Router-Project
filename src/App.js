import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import { useState } from "react";
function App() {
  const[loggedin,setloggedin]=useState(false);
  return (
    <div className="parent">
      <Navbar loggedin={loggedin} setloggedin={setloggedin}></Navbar>
      <br />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login loggedin={loggedin} setloggedin={setloggedin}></Login>}></Route>
        <Route path="/signup" element={<Signup loggedin={loggedin} setloggedin={setloggedin}></Signup>}></Route>
        <Route path="/dashboard" element={<PrivateRoute loggedin={loggedin}><Dashboard></Dashboard></PrivateRoute>}></Route>
      </Routes>
    </div>
  )
}

export default App;
