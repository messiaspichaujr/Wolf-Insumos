import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi'; 
import '../css/IsoSection.css';

export const IsoSection = () => {
  return (
    <section id="certificacao" className="iso-section">
      <div className="container iso-container">
        
        <motion.div 
          className="iso-seal"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <FiAward className="iso-icon" />
          <div className="iso-seal-text">
            ISO 9001
            <span>CERTIFICADO</span>
          </div>
        </motion.div>

        <motion.div 
          className="iso-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display">Certificação <span className="color-accent">ISO 9001</span></h2>
          <div className="iso-text-block">
            <h3>Escopo da Certificação</h3>
            <p>
              Fabricação de produtos como Wolf Flux, Grafite, Revestimento 
              Refratário e Cerâmica, e comercialização de manta de fibra 
              cerâmica, voltados para a área de fundição de alumínio.
            </p>
          </div>
          <div className="iso-text-block">
            <h3>Política da Qualidade</h3>
            <p>
              Exercer as atividades de seu escopo, atendendo os requisitos 
              aplicáveis às partes interessadas, satisfazendo as 
              necessidades de seus clientes, promovendo melhorias 
              contínuas conforme os requisitos da NBR ISO 9001:2015.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};