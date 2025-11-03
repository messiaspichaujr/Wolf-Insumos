import React from 'react';
import { Link } from 'react-scroll'; // <-- MUDANÇA AQUI
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer-container">
      <div className="footer-content container">
        <div className="footer-top">
          
          <Link to="home" smooth={true} offset={-70} duration={500} className="footer-logo font-display">
            WOLF<span className="color-accent">.</span>
          </Link>
          
          <ul className="footer-nav">
            <li><Link to="sobre" smooth={true} offset={-70} duration={500}>Sobre Nós</Link></li>
            <li><Link to="produtos" smooth={true} offset={-70} duration={500}>Produtos</Link></li>
            <li><Link to="qualidade" smooth={true} offset={-70} duration={500}>Qualidade</Link></li>
            <li><Link to="contato" smooth={true} offset={-70} duration={500}>Contato</Link></li>
          </ul>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Wolf Insumos. Todos os direitos reservados.
          </p>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};