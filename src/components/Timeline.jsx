import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../css/Timeline.css';

const timelineData = [
  {
    year: '25/04/2016',
    title: 'O Início em Joinville-SC',
    text: 'A WOLF iniciou suas atividades como representação/revenda de insumos para fundição em outra unidade fabril.'
  },
  {
    year: 'Janeiro 2018',
    title: 'A Nova Sede e Início da Produção',
    text: 'O contrato de representação foi encerrado, mudou-se para o atual galpão de 360 m². Alterou seu nome e iniciou a produção com misturadoras de fluxos e tintas.'
  },
  {
    year: '2019',
    title: 'Especialização em Grafites',
    text: 'A empresa adquiriu 1 forno, 1 prensa hidráulica e contratou 2 colaboradores, especializando-se na fabricação de Grafites.'
  }
];

const TimelineItem = ({ year, title, text }) => {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="timeline-year color-accent">{year}</span>
        <h3 className="timeline-title font-display">{title}</h3>
        <p className="timeline-text">{text}</p>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] 
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="timeline-container" ref={ref}>
      
      <div className="timeline-line"></div>
      
      <motion.div 
        className="timeline-progress" 
        style={{ scaleY }} 
      />

      <div className="timeline-items">
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={index}
            year={item.year}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};