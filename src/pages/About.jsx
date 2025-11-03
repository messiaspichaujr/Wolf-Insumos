import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '../components/Timeline';
import '../css/About.css'; 

export const About = () => {
  return (
    <section id="sobre"> 
      <motion.div 
        className="about-hero container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-display">
          Da Revenda à <span className="color-accent">Fabricação</span>
        </h1>
        <p>
          A WOLF é uma empresa que exerce as atividades de Produção de produtos 
          como Wolf Flux, Grafite, Revestimento Refratário e Cerâmica, 
          e comercialização de manta de fibra cerâmica, voltados para a área 
          de fundição de alumínio. Seus clientes estão localizados 
          principalmente no sul do Brasil e São Paulo.
        </p>
      </motion.div>

      <section className="timeline-section container">
        <h2 className="font-display">Nossa Jornada</h2>
        <Timeline />
      </section>
    </section>
  );
};