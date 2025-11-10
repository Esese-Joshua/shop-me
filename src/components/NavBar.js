import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icon package
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={""} alt="Logo" className="logo" />
          {/* {logo && <img src={logo} alt="logo" />} */}

        </Link>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/men" onClick={() => setMenuOpen(false)}>Men</NavLink>
        <NavLink to="/women" onClick={() => setMenuOpen(false)}>Women</NavLink>
        <NavLink to="/aboutus" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contactus" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart</NavLink>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </header>
  );
};

export default NavBar; 
