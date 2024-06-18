import React from 'react';
import './styles.css'; // Importa os estilos do Footer


function Footer() {
  return (
    <div className="footer">
      <section className='texto'>
        <div className="main-text">
          <h1>Faça dos seus sonhos <span>realidade</span></h1>
        
        <hr class="linha-separadora"></hr>
        </div>
        <div className="copyright">
        {/* <h6>&copy; 2024 HabitexGroup. Todos os direitos reservados.</h6> */}
        </div>
      </section >
    </div >
  );
}

export default Footer;
