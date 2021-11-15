import React from "react";
import {BrowserRouter as  Router, Route, Routes, Switch } from "react-router-dom"
import Home from "./components/Home";
import Gelato from "./components/Gelato"; 
import GelatoForSpecialNeeds from "./components/GelatoForSpecialNeeds";
import DonutsForSpecialNeeds from "./components/DonutsForSpecialNeeds"
import Donuts from "./components/Donuts";
import Account from "./components/Account.js";
import Basket from "./components/Basket.js"
import "./App.css";
import Navbar from "./components/Navbar";
import { Button } from '@material-ui/core';


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
       <Route path="/home" element={<Home/>} exact />
       <Route path="/gelato" element={<Gelato/>} exact />
       <Route path="/gelatoforspecialneeds" element={<GelatoForSpecialNeeds/>} exact />
       <Route path="/donuts" element={<Donuts/>} exact />
       <Route path="/donutsforspecialneeds" element={<DonutsForSpecialNeeds/>} exact />
       <Route path="/account" element={<Account/>} exact />
       <Route path="/basket" element={<Basket/>} exact />
     </Routes>

       
      
    </Router>
  );
}


export default App;
