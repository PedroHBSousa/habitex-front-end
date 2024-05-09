import React from 'react';
import '.';
import './styles.css';
import imagem from '../../assets/img/lote.jpg';

function Lotes() {
  return (
    <section className="lotes-section">
      <div className="container">
        <h2 className="section-title">Nossos Lotes</h2>
        <div className="card-container">
          <div className="card">
            <img src={imagem} alt="Lote 1" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">BeachHouse</h3>
              <span>Pronto</span>
              <p>São Sebastião - SP</p>
              <hr class="linha"></hr>
              <p className="card-description">Descrição concisa do produto ou serviço. Pode incluir algumas palavras-chave destacando os principais recursos ou benefícios. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <hr class="linha"></hr>
              <p>200m² - 3 suítes | 107m² - 2 dorms - 3 suíte</p>
              <a href="#" className="btn">Saber mais</a>
            </div>
          </div>
          <div className="card">
            <img src={imagem} alt="Lote 2" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Condomínio dos Passáros</h3>
              <span>Em Obra</span>
              <p>Ubatuba - SP</p>
              <hr class="linha"></hr>
              <p className="card-description">Descrição concisa do produto ou serviço. Pode incluir algumas palavras-chave destacando os principais recursos ou benefícios. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <hr class="linha"></hr>
              <p>209m² - 5 suítes | 234m² - 3 dorms - 6 suíte</p>
              <a href="#" className="btn">Saber mais</a>
            </div>
          </div>
          <div className="card">
            <img src={imagem} alt="Lote 3" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Condomínio Residencial</h3>
              <span>Pronto</span>
              <p>Caraguatatuba - SP</p>
              <hr class="linha"></hr>
              <p className="card-description">Descrição concisa do produto ou serviço. Pode incluir algumas palavras-chave destacando os principais recursos ou benefícios. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <hr class="linha"></hr>
              <p>148m² - 3 suítes | 97m² - 3 dorms - 1 suíte</p>
              <a href="#" className="btn">Saber mais</a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lotes;