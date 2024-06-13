import React from 'react';
import './imovelcard.css';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Ar1 from '../../assets/img/img-card-Ar/Ar1.jpg';
import Ar2 from '../../assets/img/img-card-Ar/Ar2.jpg';
import Ar3 from '../../assets/img/img-card-Ar/Ar3.jpg';
import Ar4 from '../../assets/img/img-card-Ar/Ar4.jpg';
import Ar5 from '../../assets/img/img-card-Ar/Ar5.jpg';
import ItaimImage from '../../assets/img/FACHADA VIZCAYA.png';
import Villas1 from '../../assets/img/img-card-Villas/Villas1.jpg';
import Villas2 from '../../assets/img/img-card-Villas/Villas2.jpg';
import Villas3 from '../../assets/img/img-card-Villas/Villas3.jpg';
import Villas4 from '../../assets/img/img-card-Villas/Villas4.jpg';
import Villas5 from '../../assets/img/img-card-Villas/Villas5.jpg';






function ImoveisELotes() {

  return (

    <div className="property-list">
      
      <div className="property-card slim">
        <Carousel className="custom-carousel" showThumbs={false} showStatus={false}>
          <div>
            <img src={Villas1} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={Villas2} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={Villas3} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={Villas4} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={Villas5} alt="Imagem do Imóvel" className="property-image"/>
          </div>
        </Carousel>
          <div className="property-details">
          <h2>Villas Del Sol</h2>
            <p>5 casas independentes De 222 a 326 m² 3 suítes Piscina privativa com Espaço gourmet.</p>
          <div className="contact-info">
            <p><strong>Rua Dr.Cantídio de Moura Campos, 350 - São Sebastião</strong> </p>
          </div>
          <button onClick={() => window.location.href="https://api.whatsapp.com/send/?phone=5511977377113&text=Bom+dia%2C+poderiam+me+apresentar+alguns+im%C3%B3veis%3F&type=phone_number&app_absent=0"}>Saiba mais </button>
        </div>
      </div>

      <div className="property-card slim">
        <Carousel className="custom-carousel" showThumbs={false} showStatus={false}>
          <div>
            <img src={ItaimImage} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={ItaimImage} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={ItaimImage} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={ItaimImage} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={ItaimImage} alt="Imagem do Imóvel" className="property-image"/>
          </div>
        </Carousel>
        <div className="property-details">
          <h2>Vizcaya Itaim</h2>
            <p>Novo empreendimento alto padrão em uma das esquinas mais charmosas da cidade.</p>
          <div className="contact-info">
            <p><strong> Av. Horácio Lafer, 430 - Itaim Bibi, São Paulo - SP, 04538-082</strong></p>
          </div>
          <button onClick={() => window.location.href="https://api.whatsapp.com/send/?phone=5511977377113&text=Bom+dia%2C+poderiam+me+apresentar+alguns+im%C3%B3veis%3F&type=phone_number&app_absent=0"}>Saiba mais </button>
        </div>
      </div>

      <div className="property-card slim">
        <Carousel className="custom-carousel" showThumbs={false} showStatus={false}>
          <div>
            <img src={Ar1} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={Ar2} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={Ar3} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={Ar4} alt="Imagem do Imóvel" className="property-image"/>
          </div>
          <div>
            <img src={Ar5} alt="Imagem do Imóvel" className="property-image"/>
          </div>
        </Carousel>
        <div className="property-details">
          <h2>Ar Ibirapuera</h2>
            <p>Luxuosa cobertura com vista para o mar, 2 quartos, 2 banheiros, e terraço privativo.</p>
          <div className="contact-info">
            <p><strong>Av. Professor Ascendino Reis, 1282 - Vila Clementino, São Paulo - SP, 04027-000</strong> </p>
          </div>
          <button onClick={() => window.location.href="https://api.whatsapp.com/send/?phone=5511977377113&text=Bom+dia%2C+poderiam+me+apresentar+alguns+im%C3%B3veis%3F&type=phone_number&app_absent=0"}>Saiba mais </button>
        </div>
      </div>
    </div>


  );
};

export default ImoveisELotes;
