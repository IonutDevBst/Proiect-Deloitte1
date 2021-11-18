import React  from "react";
import { Link,NavLink} from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { ReactComponent as Logo } from "../resources/Group 1327.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="links1">
      <ul className="navbar">
        <Link to="/home" className="home">
          <li>
            <Logo />
          </li> 
        </Link>
        <NavLink to="/gelato" className="gelato" activeClassName="active">
          <li className="novacolor">Gelato</li>
        </NavLink>
        <NavLink to="/gelatoforspecialneeds" className="gelatoforspecialneeds" activeClassName="active">
          <li className="novacolor">Gelato for special needs </li>
        </NavLink>
        <NavLink to="/donuts" className="donuts" activeClassName="active">
          <li className="novacolor">Donuts</li>
        </NavLink>
        <NavLink to="/donutsforspecialneeds" className="donutsforspecialneeds" activeClassName="active">
          <li className="novacolor">Donuts for special needs</li>
        </NavLink>
      </ul>
      <ul className="nav-links ">
        <NavLink to="/account" className="account" activeClassName="active">
            <div className="novacolor">
          <li className="center-icons-button">
            <AccountCircleOutlinedIcon />
          </li>
          <li className="center-icons-button"> Account</li>
          </div>
        </NavLink>
        <NavLink to="/basket" className="basket " activeClassName="active">
            <div className="novacolor">
          <li className="center-icons-button">
            <ShoppingBasketOutlinedIcon />
          </li>
          <li className="center-icons-button">Basket</li>
          </div>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
