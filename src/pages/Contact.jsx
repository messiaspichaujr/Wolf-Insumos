import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import '../css/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 

  const WEB3FORMS_ACCESS_KEY = 'SUA_ACCESS_KEY_AQUI';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const data = JSON.stringify({
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Nova mensagem de Contato (Wolf Insumos) - ${formData.name}`,
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="container contact-container">
        
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display">
            Entre em <span className="color-accent">Contato</span>
          </h2>
          <p className="contact-intro">
            Pronto para otimizar sua produção? Envie-nos uma mensagem
            e nossa equipe de especialistas retornará em breve.
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <FiMail className="detail-icon" />
              <div className="detail-text">
                E-mail
                <span>comercial@wolfinsumos.com.br</span> 
              </div>
            </div>
            <div className="detail-item">
              <FiPhone className="detail-icon" />
              <div className="detail-text">
                Telefone
                <span>(47) 3435-8454</span>
              </div>
            </div>
            <div className="detail-item">
              <FiMapPin className="detail-icon" />
              <div className="detail-text">
                Localização
                <span>Joinville - SC, Brasil</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="form-group">
            <label htmlFor="name">Seu Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Seu E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Sua Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="form-textarea"
            />
          </div>
          
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>

          {submitStatus === 'success' && (
            <div className="form-status success">
              Mensagem enviada com sucesso! Obrigado pelo contato.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="form-status error">
              Ocorreu um erro ao enviar. Tente novamente mais tarde.
            </div>
          )}
        </motion.form>

      </div>
    </section>
  );
};