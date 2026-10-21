import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>Mi App</h2>
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/acerca" className={({ isActive }) => (isActive ? 'active' : '')}>
              Acerca
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active' : '')}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/blop" className={({ isActive }) => (isActive ? 'active' : '')}>
              Bloop
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
