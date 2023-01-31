import "./styles.css";
import React from "react";
import Home from "./Home";
import About from "./About";
import AddUser from "./AddUser";
import User from "./User";
import Contact from "./Contact";
import EditUser from "./EditUser";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
          
          <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/adduser" element={<AddUser/>} />
          <Route  path="/edituser/:id" element={<EditUser/>} />
          <Route  path="/user/:id" element={<User/>} />
           <Route  path="/contact" element={<Contact/>} /> 
          <Route element={NotFound} />
          </Routes>
          
        
      </div>
    </Router>
  );
}


