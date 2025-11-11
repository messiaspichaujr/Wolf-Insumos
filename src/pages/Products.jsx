import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Products.css';
import { ProductModal } from '../components/ProductModal';

import imgTinta from '../assets/01.png';
import imgGrafites from '../assets/02.png';
import imgFluxo from '../assets/03.png';
import imgPastilhas from '../assets/04.png';
import imgCeramicas from '../assets/05.png';
import imgInsumos from '../assets/06.png';

const allProducts = [
  { id: 1, name: 'Tinta Isolante',
    description: 'Tintas isolantes, grafitadas, condutoras, semicondutoras empregadas em fundição de metais não ferrosos, nos processos de gravidade em coquilhas e baixa pressão.',
    image: imgTinta 
  },
  { id: 2, name: 'Grafites',
    description: 'Eixos e Rotores de grafites para desgaseificação de alumínio. Fabricamos peças sob medida conforme sua necessidade.',
    image: imgGrafites 
  },
  { id: 3, name: 'Fluxo Escorificante',
    description: 'Fluxos auxiliares para tratamento, cobertura, proteção, limpeza e recuperação de alumínio e sua ligas.',
    image: imgFluxo 
  },
  { id: 4, name: 'Pastilhas de Desgaseificação e Gás',
    description: 'Pastilhas usadas para desgaseificação do alumínio e para adição de gases.',
    image: imgPastilhas 
  },
  { id: 5, name: 'Cerâmicas',
    description: 'Peças moldadas em materiais cerâmicos para uso em fundições de alúminio.',
    image: imgCeramicas 
  },
  { id: 6, name: 'Insumos Para Injeção de Alúminio',
    description: 'Lubrificante de Pistão, desmoldantes, entre outros...',
    image: imgInsumos 
  }
];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section id="produtos" className="products-section section-padding">

        <div className="container">
          <motion.div 
            className="products-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display">Nossos <span className="color-accent">Produtos</span></h2>
            <p>
              Especializados em Grafites, Tintas e Fluxos, fornecemos soluções
              de alta performance para a sua fundição.
            </p>
          </motion.div>

          <motion.div 
            className="products-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {allProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                // O Card usa a imagem do produto (do import) como fundo
                style={{ backgroundImage: `url(${product.image})` }}
                // O 'onClick' agora abre o modal
                onClick={() => setSelectedProduct(product)}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                layout
              >
                <div className="product-card-overlay"></div>
                <div className="product-card-content">
                  <h3 className="font-display">{product.name}</h3>
                  {/* Pega os primeiros 70 caracteres da descrição */}
                  <p>{product.description.substring(0, 70)}...</p>
                  <span>Ver Detalhes +</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div> 
      </section>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </>
  );
};