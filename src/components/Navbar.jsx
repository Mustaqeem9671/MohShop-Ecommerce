import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo1 from "../components/image/logo1.jpeg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
       <img src={Logo1} alt="" />
      </div>
      <div className="center-section">
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/favorite">Favorites</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactpage">Contact Us</Link>
          </li>
          <li>
            <Link to="/mainPage">Main page</Link>
          </li>
        </ul>
      </div>
      <div className="cart">
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      </div>
      <div className="right-section">
        <div className="cart-icon">
          <button>
            <Link to='/profile'>Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
