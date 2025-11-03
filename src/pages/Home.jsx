import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; 
import { GraphiteModel } from '../components/GraphiteModel';
import '../css/Home.css';

export const Home = () => {
  return (
    <section id="home" className="hero-section container">

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-display">
          A Vanguarda em Insumos de <span className="color-accent">Grafite</span>
        </h1>
        <p>
          Especialistas em soluções de alta performance que transformam
          matéria-prima em precisão industrial.
        </p>
        <div className="hero-ctas">
          <Link to="produtos" className="btn-primary" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            Conheça Nossos Produtos
          </Link>
          <Link to="sobre" className="btn-secondary" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            Sobre a Wolf
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <GraphiteModel />
      </motion.div>

    </section>
  );
};