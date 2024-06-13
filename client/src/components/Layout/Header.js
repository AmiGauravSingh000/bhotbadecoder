import React, { useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import "./Header.css";
import { FaLaptopCode, FaBars } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "nav-link active-link" : "nav-link";
  };

  return (
    <header className="header">
      <div className="navbar">
        <Link to="/" className="navbar-brand">
          <FaLaptopCode className="brand-icon" />
          BhotBadeCoder
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </button>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" className={getNavLinkClass("/")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/category" className={getNavLinkClass("/category")}>
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={getNavLinkClass("/register")}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={getNavLinkClass("/login")}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={getNavLinkClass("/cart")}>
                Cart(0)
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
