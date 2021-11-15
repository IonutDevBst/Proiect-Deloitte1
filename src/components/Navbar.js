import React, { useState }  from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

    const [isMobile, setIsMobile] = useState(true);

    return (
      
        <nav className="navbar">
           <ul className="nav-links navbar">
               <Link to="/home" className="home">
                   <li>Gelato &amp; Donuts</li>
               </Link>
               <Link to="/gelato" className="gelato">
                   <li>Gelato</li>
               </Link>
               <Link to="/gelatoforspecialneeds" className="gelatoforspecialneeds">
                   <li>GELATO FOR SPECIAL NEEDS </li>
               </Link>
               <Link to="/donuts" className="donuts">
                   <li>DONUTS</li>
               </Link>
               <Link to="/donutsforspecialneeds" className="donutsforspecialneeds">
                   <li>DONUTS FOR SPECIAL NEEDS</li>
               </Link>
               <Link to="/account" className="account">
                   <li>Account</li>
               </Link>
               <Link to="/basket" className="basket">
                   <li>Basket</li>
               </Link>


           </ul>
           <button className="mobile-menu-icon">
               {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i> }
           </button>
        </nav> 
       
    )
}

export default Navbar
