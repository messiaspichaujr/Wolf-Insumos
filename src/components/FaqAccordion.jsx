import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import '../css/FaqAccordion.css';

const faqData = [
  {
    question: 'Quais regiões a Wolf Insumos atende?',
    answer: 'Atendemos clientes em todo o Sul e Sudeste, com foco principal em Santa Catarina, Paraná, Rio Grande do Sul, São Paulo e Minas Gerais.'
  },
  {
    question: 'Quais são os principais produtos da Wolf?',
    answer: 'Somos especialistas em uma linha completa para fundição de alumínio e não ferrosos. Nossos principais produtos incluem Tintas Refratárias (para pintura de coquilhas e ferramentas), Grafites (eixos, rotores), Fluxos (escorificante, desoxidante), Pastilhas para Desgaseificação e Refratários Cerâmicos (incluindo Cerâmica Sílica Fundida).'
  },
  {
    question: 'Vocês fabricam peças de grafite sob medida?',
    answer: 'Sim. Além da nossa linha padrão, fabricamos peças técnicas como Eixos e Rotores de Grafite conforme a necessidade e o projeto específico de cada cliente.'
  },
  {
    question: 'Qual o diferencial da Wolf no mercado de fundição?',
    answer: 'Nosso foco é o controle de qualidade total, desde a matéria-prima até o suporte técnico. Nossos investimentos em equipamentos (fornos e prensas hidráulicas) garantem a consistência e a alta performance dos nossos produtos.'
  }
];

// Componente "Item" (cada pergunta)
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <motion.button 
        className="faq-question" 
        onClick={onClick}
      >
        <span>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }} // Anima a seta
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer-wrapper"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="faq-answer">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display">
            Perguntas <span className="color-accent">Frequentes</span>
          </h2>
        </motion.div>
        
        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};