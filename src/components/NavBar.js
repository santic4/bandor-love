import React from 'react';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';
import '../styles/CartWidget.css';
const NavBar = () => {
  return (
    
    <nav className="navbar">
      <h1 style={{ color: 'black', textAlign: 'center' }}>Bandor LOVE</h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/productos" className="nav-link">Productos</a>
        </li>
        <li className="nav-item">
          <a href="/contacto" className="nav-link">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;