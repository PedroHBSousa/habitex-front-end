import React from "react";
import "./styles.css"; // Importa os estilos do Footer

function Footer() {
  return (
    <>
      <div className="footer">
        <section className="texto">
          <div className="main-text">
            <h1>
              Faça dos seus sonhos <span>realidade</span>
            </h1>
            <hr class="linha-separadora"></hr>
          </div>
        </section>
      </div>
      <div className="contatos">
        <p>Telefone: +55 (11)97737-7113</p>
        <p>Email: habitexgroup@gmail.com</p>
        <p>Endereço: Rua Cap. Luiz Soares, 51 - São Sebastião, SP</p>
      </div>
      <div className="social-medias">
        
      </div>
      <div className="copyright">
        <p> &copy; 2024 HabitexGroup | Todos os direitos reservados</p>
      </div>
    </>
  );
}

export default Footer;
