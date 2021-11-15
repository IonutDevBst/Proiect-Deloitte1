import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { ReactComponent as Logo } from "./resources/Group 1327.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <nav className="navbar">
      <ul className="nav-links navbar">
        <Link to="/home" className="home">
          <li>
            <Logo />
          </li>
        
        </Link>
        <Link to="/gelato" className="gelato">
          <li className="novacolor">Gelato</li>
        </Link>
        <Link to="/gelatoforspecialneeds" className="gelatoforspecialneeds">
          <li className="novacolor">Gelato for special needs </li>
        </Link>
        <Link to="/donuts" className="donuts">
          <li className="novacolor">Donuts</li>
        </Link>
        <Link to="/donutsforspecialneeds" className="donutsforspecialneeds">
          <li className="novacolor">Donuts for special needs</li>
        </Link>
      </ul>
      <ul className="nav-links navbar">
        <Link to="/account" className="account">
          <li className="novacolor account1">
            <AccountCircleOutlinedIcon />
          </li>
          <li className=" account1 novacolor"> Account</li>
        </Link>
        <Link to="/basket" className="basket">
          <li className=" novacolor account1">
            <ShoppingBasketOutlinedIcon />
          </li>
          <li className="novacolor account1">Basket</li>
        </Link>
      </ul>

      <button className="mobile-menu-icon">
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
