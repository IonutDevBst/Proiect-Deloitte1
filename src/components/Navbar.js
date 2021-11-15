import React, { useState }  from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = () => {

    const [isMobile, setIsMobile] = useState(true);

    return (
      
        <nav className="navbar">
           <ul className="nav-links navbar">
               <Link to="/home" className="home">
                   <li className="novacolor">Gelato &amp; Donuts</li>
               </Link>
               <Link to="/gelato" className="gelato">
                   <li className="novacolor">Gelato</li>
               </Link>
               <Link to="/gelatoforspecialneeds" className="gelatoforspecialneeds">
                   <li className="novacolor">GELATO FOR SPECIAL NEEDS </li>
               </Link>
               <Link to="/donuts" className="donuts">
                   <li className="novacolor">DONUTS</li>
               </Link>
               <Link to="/donutsforspecialneeds" className="donutsforspecialneeds">
                   <li className="novacolor">DONUTS FOR SPECIAL NEEDS</li>
               </Link>
             


           </ul>
            <ul className="nav-links navbar">
            <Link to="/account" className="account">
                     <li className="novacolor"> Account</li> 

               </Link>
               <Link to="/basket" className="basket">
                   <li className="novacolor">Basket</li>
               </Link>

            </ul>


           <button className="mobile-menu-icon">
               {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i> }
           </button>
        </nav> 
       
    )
}

export default Navbar
