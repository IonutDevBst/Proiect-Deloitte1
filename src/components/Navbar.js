import React, { useState }  from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

    const [isMobile, setIsMobile] = useState(true);

    return (
      
        <nav className="navbar">
           <h3 className="logo">Logo</h3>
           <ul className="nav-links navbar">
               <Link to="/home" className="home">
                   <li>Home</li>
               </Link>
               <Link to="/about" className="about">
                   <li>Gelato</li>
               </Link>
               <Link to="/skills" className="skills">
                   <li>GELATO FOR SPECIAL NEEDS </li>
               </Link>
               <Link to="/contact" className="contact">
                   <li>DONUTS</li>
               </Link>
               <Link to="/signup" className="signup">
                   <li>Sign Up</li>
               </Link>


           </ul>
           <button className="mobile-menu-icon">
               {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i> }
           </button>
        </nav> 
       
    )
}

export default Navbar
