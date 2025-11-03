import React from 'react';
import { motion } from 'framer-motion';
import '../css/LocationMap.css';

const GOOGLE_MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9764024156448!2d-48.899616123784256!3d-26.22995627706078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea5e62fec88a7%3A0xd2acb86951bcc2ba!2sR.%20Rudolfo%20Schramm%2C%20171%20-%20Rio%20Bonito%2C%20Joinville%20-%20SC%2C%2089239-283!5e0!3m2!1spt-BR!2sbr!4v1762202296607!5m2!1spt-BR!2sbr";

export const LocationMap = () => {
  return (
    <section id="localizacao" className="map-section">
      <div className="container">
        <motion.div
          className="map-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display">
            Nossa <span className="color-accent">Localização</span>
          </h2>
          <p>
            Estamos estrategicamente localizados em Joinville, SC, 
            prontos para atender a demanda da indústria nacional.
          </p>
        </motion.div>

        <motion.div
          className="map-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <iframe
            src={GOOGLE_MAPS_URL}
            title="Localização da Wolf Insumos"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};