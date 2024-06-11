import React from 'react';
import './imovelcard.css';
import ArImage from '../../assets/img/FACHADA ARIBIRAPUERA.jpg';
import ItaimImage from '../../assets/img/FACHADA VIZCAYA.png';
import VillasImage from '../../assets/img/FACHADA VILLAS.jpg';





function ImoveisELotes() {

  return (

    <div className="property-list">
      <div className="property-card slim">
        <img
          src={VillasImage} alt="Imagem do Imóvel" className="property-image"/>
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
        <img
          src={ItaimImage}
          alt="Imagem do Imóvel"
          className="property-image"
        />
        <div className="property-details">
          <h2>Vizcaya Itaim</h2>
          <p>É o mais novo empreendimento alto padrão em uma das esquinas mais charmosas da cidade.</p>
          <div className="contact-info">
            <p><strong> Av. Horácio Lafer, 430 - Itaim Bibi, São Paulo - SP, 04538-082</strong></p>
  
          </div>
          <button onClick={() => window.location.href="https://api.whatsapp.com/send/?phone=5511977377113&text=Bom+dia%2C+poderiam+me+apresentar+alguns+im%C3%B3veis%3F&type=phone_number&app_absent=0"}>Saiba mais </button>
        </div>
      </div>

      <div className="property-card slim">
        <img
          src={ArImage}
          alt="Imagem do Imóvel"
          className="property-image"
        />
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
