import React from 'react';
import { Link } from 'react-scroll'; 
import { FiMenu } from 'react-icons/fi';
import '../css/Navbar.css';

export const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar container">
        
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="nav-logo font-display"
        >
          WOLF<span className="color-accent">.</span>
        </Link>
        
        <ul className="nav-menu">
          
          <li>
            <Link to="home" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="sobre" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link to="produtos" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Produtos
            </Link>
          </li>
          <li>
            <Link to="qualidade" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Qualidade
            </Link>
          </li>
          <li>
            <Link to="contato" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-contact-btn">
              Contato
            </Link>
          </li>
        </ul>

        <button className="nav-toggle">
          <FiMenu />
        </button>
      </nav>
    </header>
  );
};