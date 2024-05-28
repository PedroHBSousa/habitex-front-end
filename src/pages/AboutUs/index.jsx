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
        <a href="https://api.whatsapp.com/send/?phone=5511977377113&text=Bom+dia%2C+poderiam+me+apresentar+alguns+im%C3%B3veis%3F&type=phone_number&app_absent=0">
        <button href="https://api.whatsapp.com/send/?phone=5511977377113&text=Bom+dia%2C+poderiam+me+apresentar+alguns+im%C3%B3veis%3F&type=phone_number&app_absent=0">Fale Conosco ❯ </button>
        </a>
      </div>
    </div>

  );
}

export default AboutUs;