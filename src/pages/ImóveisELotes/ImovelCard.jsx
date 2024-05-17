import React from 'react';
import './styles.css';


const ImovelCard = ({ titulo, endereco, preco, descricao, imagem }) => {
  return (
    <div className="imovel-card">
      <img src={imagem} alt={'Imagem do imóvel ${titulo}'} />
      <div className="imovel-info">
        <h2>{titulo}</h2>
        <p style={{color:'#FFF'}}>{endereco}</p>
        <p>Preço: {preco}</p>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default ImovelCard;
