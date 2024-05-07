import React from 'react';
import '.';
import './styles.css';

function Lotes() {
  return (
    <section className="lotes-section">
      <div className="container">
        <h2 className="section-title">Nossos Lotes</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/lot1.jpg" alt="Lote 1" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Lote 1</h3>
              <p className="card-description">Descrição do lote 1.</p>
              <a href="#" className="btn">Ver detalhes</a>
            </div>
          </div>
          <div className="card">
            <img src="/images/lot2.jpg" alt="Lote 2" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Lote 2</h3>
              <p className="card-description">Descrição do lote 2.</p>
              <a href="#" className="btn">Ver detalhes</a>
            </div>
          </div>
          <div className="card">
            <img src="/images/lot3.jpg" alt="Lote 3" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Lote 3</h3>
              <p className="card-description">Descrição do lote 3.</p>
              <a href="#" className="btn">Ver detalhes</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lotes;