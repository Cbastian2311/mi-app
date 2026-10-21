import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} sebastian</p>
      <div className="footer-links">
        <a href="#terminos">pie de pagina</a>
      </div>
    </footer>
  );
}

export default Footer;