import React from 'react';
import './styles.css'; // Importa os estilos do Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <h1>Faça dos seus sonhos <span>realidade</span></h1>
      </div>
      <div className="footer-2text">
        <h6 href=''>HabitexGroup</h6>
      </div>
      <div className="footer-contacts">
        <ul className="contact-list">
          <li><i className="telefone"></i> Telefone: (12) 4002-8922</li>
        </ul>
      </div>
      <div className="footer-socialmedias">
        <div className="social-buttons">
          <button className="whatsapp-button"><i className="fab fa-whatsapp"></i> WhatsApp</button>
          <button className="facebook-button"><i className="fab fa-facebook-f"></i> Facebook</button>
          <button className="instagram-button"><i className="fab fa-instagram"></i> Instagram</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;