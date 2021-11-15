import React from "react";
import {BrowserRouter as  Router, Route, Routes, Switch } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About"; 
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Signup from "./components/Signup.js";
import "./App.css";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
       <Route path="/home" element={<Home/>} exact />
       <Route path="/about" element={<About/>} exact />
       <Route path="/skills" element={<Skills/>} exact />
       <Route path="/contact" element={<Contact/>} exact />
       <Route path="/signup" component={Signup} exact />
     </Routes>

       
      
    </Router>
  );
}


export default App;
