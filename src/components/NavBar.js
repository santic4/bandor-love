import React from 'react';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';
import '../styles/CartWidget.css';
import {NavLink} from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';


const NavBar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src="../img/logorecortado.jpg" alt="Logo" className='logo'/>
      </div>

      <ul className="navbar-n" >
        
        <li className="nav-item" >
          <NavLink to="/" className="nav-link a">Inicio</NavLink>
        </li>
       
        <li className="nav-item" >
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/categoria/Libros">Libros</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/categoria/Juegos">Juguetes</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/categoria/Electronica">Electrónica</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/categoria/Hogar">Hogar</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/categoria/Ropa">Ropa</NavDropdown.Item>
          </NavDropdown>
        </li>
        
        <li className="nav-item">
          <a href="/contacto" className="nav-link">Contacto</a>
        </li>
        
      </ul>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;