import React from 'react';
import './imovelcard.css';
import loteImage from '../../assets/img/img1.jpg';




function ImoveisELotes() {

  return (

    <div className="property-list">
      <div className="property-card slim">
        <img
          src={loteImage} alt="Imagem do Imóvel" className="property-image"/>
        <div className="property-details">
          <h2>Apartamento Sol e Mar</h2>
          <p>Moderno apartamento com 3 quartos, 2 banheiros, cozinha equipada, sala de estar espaçosa e varanda com vista panorâmica da cidade.</p>
          <ul>
            <li><strong>Tamanho:</strong> 120 m²</li>
            <li><strong>Quartos:</strong> 3</li>
            <li><strong>Banheiros:</strong> 2</li>
            <li><strong>Garagem:</strong> 1 vaga</li>
            <li><strong>Preço:</strong> R$ 500.000</li>
          </ul>
          <div className="contact-info">
            <p><strong>Endereço:</strong> Rua Exemplo, 123, Centro, Cidade, Estado</p>
          </div>
        </div>
      </div>

      <div className="property-card slim">
        <img
          src={loteImage}
          alt="Imagem do Imóvel"
          className="property-image"
        />
        <div className="property-details">
          <h2>Casa Guararema</h2>
          <p>Ampla casa com 4 quartos, 3 banheiros, piscina, jardim e garagem para 2 carros.</p>
          <ul>
            <li><strong>Tamanho:</strong> 200 m²</li>
            <li><strong>Quartos:</strong> 4</li>
            <li><strong>Banheiros:</strong> 3</li>
            <li><strong>Garagem:</strong> 2 vagas</li>
            <li><strong>Preço:</strong> R$ 800.000</li>
          </ul>
          <div className="contact-info">

            <p><strong>Endereço:</strong> Avenida Exemplo, 456, Subúrbio, Cidade, Estado</p>
          </div>
        </div>
      </div>

      <div className="property-card slim">
        <img
          src={loteImage}
          alt="Imagem do Imóvel"
          className="property-image"
        />
        <div className="property-details">
          <h2>Cobertura na Praia</h2>
          <p>Luxuosa cobertura com vista para o mar, 2 quartos, 2 banheiros, e terraço privativo.</p>
          <ul>
            <li><strong>Tamanho:</strong> 150 m²</li>
            <li><strong>Quartos:</strong> 2</li>
            <li><strong>Banheiros:</strong> 2</li>
            <li><strong>Garagem:</strong> 1 vaga</li>
            <li><strong>Preço:</strong> R$ 1.200.000</li>
          </ul>
          <div className="contact-info">

            <p><strong>Endereço:</strong> Rua da Praia, 789, Praia, Cidade, Estado</p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ImoveisELotes;
