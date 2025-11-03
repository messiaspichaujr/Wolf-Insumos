import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Products.css'; 

const allProducts = [
  { id: 1, name: 'Tinta Isolante',
    description: 'Tintas isolantes, grafitadas, condutoras, semicondutoras empregadas em fundição de metais não ferrosos, nos processos de gravidade em coquilhas e baixa pressão.',
    image: '/src/assets/Tinta-Isolante.jpg' },

  { id: 2, name: 'Grafites',
    description: 'Eixos e Rotores de grafites para desgaseificação de alumínio. Fabricamos peças sob medida conforme sua necessidade.',
    image: '/src/assets/Grafites.jpeg' },

  { id: 3, name: 'Fluxo Escorificante',
   description: 'Fluxos auxiliares para tratamento, cobertura, proteção, limpeza e recuperação de alumínio e sua ligas.',
   image: '/src/assets/Fluxo-Escorificante.jpeg' },

  { id: 4, name: 'Pastilhas de Desgaseificação e Gás',
    description: 'Pastilhas usadas para desgaseificação do alumínio e para adição de gases.',
    image: '/src/assets/Pastilhas.jpeg' },

  { id: 5, name: 'Cerâmicas',
    description: 'Peças moldadas em materiais cerâmicos para uso em fundições de alúminio.',
    image: '/src/assets/Ceramicas.jpeg' },

  { id: 6, name: 'Insumos Para Injeção de Alúminio',
    description: 'Lubrificante de Pistão, desmoldantes, entre outros...',
    image: '/src/assets/Insumos.jpeg' }
];

const ITEMS_PER_PAGE = 3; 

export const Products = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  const showLoadMoreButton = visibleItems < allProducts.length;

  return (
    <section id="produtos" className="products-section">
      <div className="container">
        
        <motion.div 
          className="products-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display">
            Nossas <span className="color-accent">Soluções</span>
          </h2>
          <p>
            Trabalhamos com todos os tipos insumos para fundição: Tinta Isolante, 
            Grafites, Fluxo, Escorificante, Pastilhas de Desgaseificação e Gás, 
            Cerâmicas, e Insumos para injeção de Alumínio.
          </p>
        </motion.div>

        <motion.div 
          className="products-grid"
          layout 
        >
          {allProducts.slice(0, visibleItems).map((product) => (
            
            <motion.div 
              key={product.id}
              className="product-card"
              layout 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.5 }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showLoadMoreButton && (
          <div className="load-more-container">
            <motion.button 
              onClick={loadMore}
              className="btn-secondary btn-load-more"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ver mais produtos
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
};