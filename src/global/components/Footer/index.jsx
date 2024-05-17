import React from 'react';
import './styles.css'; // Importa os estilos do Footer
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <section className='texto'>
        <div className="main-text">
          <h1>Faça dos seus sonhos <span>realidade</span></h1>
        </div>
        <hr class="linha-separadora"></hr>
        <div className="content-copy">
        <p>&copy; 2024 HabitexGroup. Todos os direitos reservados.</p>
      </div>
      </section>
      
    </div>
  );
}

export default Footer;
