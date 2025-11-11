import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import '../css/ProductModal.css';


export const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="product-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Fecha ao clicar no fundo
      >
        <motion.div
          className="product-modal-container"
          // Impede que o clique no modal feche ele
          onClick={(e) => e.stopPropagation()} 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <button onClick={onClose} className="product-modal-close-btn">
            <FiX />
          </button>
          
          {/* Layout de 2 colunas: Imagem | Detalhes */}
          <div className="product-modal-grid">
            
            {/* Coluna da Imagem */}
            <div className="product-modal-image-wrapper">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-modal-image"
              />
            </div>
            
            {/* Coluna dos Detalhes */}
            <div className="product-modal-content">
              <h2 className="font-display color-accent">{product.name}</h2>
              <p className="product-modal-description">
                {product.description}
              </p>
              {/* Você pode adicionar mais campos aqui, como especificações técnicas */}
              
              <a 
                href="#contato" // Link de exemplo
                className="btn-primary" 
                style={{ marginTop: '24px' }}
                onClick={onClose} // Fecha o modal antes de rolar
              >
                Solicitar Orçamento
              </a>
            </div>
            
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};