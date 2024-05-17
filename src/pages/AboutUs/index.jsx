import React from 'react';
import '../../pages/AboutUs/styles.css';
import AboutusBG from '../../assets/img/aboutus.jpg';
import Logo from '../../assets/img/logo 1.svg';


function AboutUs() {
  return (
    <div className="content-aboutus">

      <div className="card-aboutus">
        <img src={AboutusBG} alt="Imagem do card" className='style' />
      </div>

      <div className="texto-principal">
        
        <img src={Logo} alt="logo Habitex" className='logo-aboutus' />
        <p>Na Habitex, não apenas negociamos imóveis, criamos lares que transcendem o comum, onde cada espaço é uma expressão do requinte e da praticidade. Explore nosso portfólio de propriedades e descubra um novo nível de excelência em imóveis de alto padrão. Seja parte da nossa história de sucesso na busca pelo lar perfeito.
          <br />
          <br />
        Entre em contato conosco para começar sua jornada rumo à realização dos seus sonhos imobiliários. Descubra o luxo, a sofisticação e o conforto que esperam por você na Habitex.</p>
        <a href="https://www.instagram.com/habitexgroup/">
        <button href="https://www.instagram.com/habitexgroup/">Fale Conosco ❯ </button>
        </a>
      </div>
    </div>

  );
}

export default AboutUs;