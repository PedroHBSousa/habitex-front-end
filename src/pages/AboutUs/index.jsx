import React from 'react';
import imagem from '../../assets/img/img-aboutus.png'; // Importe a imagem aqui
import '../../pages/AboutUs/styles.css';


function AboutUs() {
  return (
    <div className="content">
      <section className="about-us-section">
        <div className="image">
          <img src={imagem} alt="Imagem" className="imagem"/>
          
        </div>
        <div className="container-text">
        <h1>Quem Somos?</h1>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore nemo eaque labore corrupti laboriosam sit eius excepturi! Obcaecati rem eveniet maxime suscipit sed officia aliquid ea, consequuntur incidunt quos?</h6>  
                  
        </div>
      </section>
    </div>
    

  );
}

export default AboutUs;