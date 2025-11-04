import React, { useState } from 'react'; 
import { Link } from 'react-scroll'; 
import { FiMenu, FiX } from 'react-icons/fi'; 'X'
import { motion, AnimatePresence } from 'framer-motion'; 
import '../css/Navbar.css';

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header" style={{ position: 'relative' }}>
      <nav className="navbar container">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="nav-logo font-display"
          onClick={closeMenu} 
        >
          WOLF<span className="color-accent">.</span>
        </Link>
        
        <ul className="nav-menu">
          <li><Link to="home" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
          <li><Link to="sobre" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Sobre Nós</Link></li>
          <li><Link to="produtos" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Produtos</Link></li>
          <li><Link to="qualidade" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Qualidade</Link></li>
          <li><Link to="contato" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-contact-btn">Contato</Link></li>
        </ul>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            className="nav-menu-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <li>
              <Link to="home" onClick={closeMenu} activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="sobre" onClick={closeMenu} activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="produtos" onClick={closeMenu} activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
                Produtos
              </Link>
            </li>
            <li>
              <Link to="qualidade" onClick={closeMenu} activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
                Qualidade
              </Link>
            </li>
            <li>
              <Link to="contato" onClick={closeMenu} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-contact-btn-mobile">
                Contato
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};