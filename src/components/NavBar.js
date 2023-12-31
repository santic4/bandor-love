import React, { useState } from 'react';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';
import '../styles/CartWidget.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
     
      <button className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div className="logo">
        <img src="../img/logorecortado.png" alt="Logo" className="logo" />
      </div>
      <ul className={`navbar-n ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <NavLink to="/" className="nav-link a">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/categoria/Libros" className="nav-link">Libros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/categoria/Juegos" className="nav-link">Juguetes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/categoria/Electronica" className="nav-link">Electrónica</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/categoria/Hogar" className="nav-link">Hogar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/categoria/Ropa" className="nav-link">Ropa</NavLink>
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
