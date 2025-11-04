import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCheckSquare, FiUsers } from 'react-icons/fi';
import '../css/Quality.css';
import capaQualidade from '../assets/capa.png';

export const Quality = () => {
    return (
        <section id="qualidade" className="quality-section">
            <div className="container quality-container">

                <motion.div
                    className="quality-content"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="font-display">
                        Qualidade como <span className="color-accent">Matéria-Prima</span>
                    </h2>
                    <p className="quality-intro">
                        Nossa sistemática de trabalho é baseada no controle de qualidade e
                        satisfação do cliente, oferecendo produtos que atendam sempre as
                        suas necessidades de compra. Nossa equipe possui vasta experiência
                        nesse ramo, contando com profissionais especializados,
                        especialmente na área química, podendo dessa forma dar apoio
                        técnico e suporte para o cliente.
                    </p>

                    <div className="quality-pillars">
                        <div className="pillar-item">
                            <FiCheckSquare className="pillar-icon" />
                            <div className="pillar-text">
                                <h3>Controle de qualidade e satisfação do cliente</h3>
                            </div>
                        </div>
                        <div className="pillar-item">
                            <FiUsers className="pillar-icon" />
                            <div className="pillar-text">
                                <h3>Equipe profissional e com anos de experiência</h3>
                            </div>
                        </div>
                        <div className="pillar-item">
                            <FiCpu className="pillar-icon" />
                            <div className="pillar-text">
                                <h3>Prestamos apoio técnico para nossos clientes</h3>
                            </div>
                        </div>

                    </div>
                </motion.div>

                <motion.div
                    className="quality-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <img src={capaQualidade} alt="Controle de Qualidade Wolf" className="quality-image" />
                </motion.div>

            </div>
        </section>
    );
};