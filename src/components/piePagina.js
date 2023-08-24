import React from "react";
import '../styles/PiePagina.css';

const PiePagina = () => {
    return (
      
      <footer className="footer">
        <div className="footer-logo">
          <img src="../img/logorecortado.png" alt="Footer Logo" />
        </div>
        <div className="segDiv">
        <p className="footer-text">© 2023 BandorLove. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Política de privacidad</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <p className="footer-copyright">Desarrollado por @santi_c4</p>
        </div>
      </footer>
      
    );
  };

  export default PiePagina;