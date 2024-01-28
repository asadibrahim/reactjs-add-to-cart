// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import '@fortawesome/fontawesome-free/css/all.css';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {totalItems}=useCartContext();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Add To Cart React JS
      </Link>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-link" onClick={toggleNavbar}>
          Home
        </Link>
        <Link to="/Products" className="navbar-link" onClick={toggleNavbar}>
          Products
        </Link>
        <Link to="/cart" className="navbar-link" onClick={toggleNavbar}>
          <i className='fas fa-shopping-cart' />
          <span>{totalItems}</span>
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} />
      </div>
    </nav>
  );
};

export default Navbar;
