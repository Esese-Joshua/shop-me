import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Brand Section */}
        <div className="footer-column brand">
          <h2 className="brand-title">VEEKS<br />ATELIER</h2>
          <p className="brand-desc">
            Curating Timeless Elegance Through Exceptional Craftsmanship.
          </p>
        </div>

        {/* Shop Links */}
        <div className="footer-column">
          <h4>SHOP</h4>
          <ul>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us </Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer-column">
          <h4>SUPPORT</h4>
          <ul>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
          </ul>
        </div>
      </div>


      <hr className="divider" />

      <div className="footer-bottom">
        <p>© 2025 Veeks Atelier. All rights reserved.</p>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaWhatsapp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
