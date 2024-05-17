import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Header from '../../global/Components/Header';
import AboutUs from '../AboutUs';
import Footer from '../../global/Components/Footer';
import Logo from '../../assets/img/logo 1.svg';
import Background from '../../assets/img/bg.jpg';
import Background2 from '../../assets/img/bg2.jpg';
import Background3 from '../../assets/img/bg3.jpg';
import Background4 from '../../assets/img/bg4.jpg';
import './styles.css';
import ImovelCard from '../ImóveisELotes/ImovelCard';

function Home() {
  const imoveis = [
    {
      titulo: 'Casa na Praia',
      endereco: 'Rua das Gaivotas, 123',
      preco: 'R$ 500.000',
      descricao: 'Uma linda casa com vista para o mar.',
      imagem: 'link-para-imagem-1.jpg',
    },
    {
      titulo: 'Apartamento no Centro',
      endereco: 'Avenida Principal, 456',
      preco: 'R$ 300.000',
      descricao: 'Apartamento bem localizado, próximo a tudo.',
      imagem: 'link-para-imagem-2.jpg',
    },
  ]
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackground((prevIndex) => (prevIndex + 1) % 4); // Change '4' to the total number of background images
    }, 5000); // Intervalo de 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  const backgrounds = [Background, Background2, Background3, Background4]; // Adicione mais imagens conforme necessário

  return (

    <div className='container'>

      <nav className='navbar'>
        <ul className='navList'>
          <img src={Logo} alt="logo-habitex" className='logo'/>
          <li><a href="#QuemSomos">Quem Somos</a></li>
          <li><a href="#Imóveis e Lotes">Imóveis e Lotes</a></li>
          <a href="https://www.instagram.com/habitexgroup/">
            <li><button href="https://www.instagram.com/habitexgroup/">Fale Conosco</button></li>
          </a>
        </ul>
      </nav>
      <div className='header'>
        <Header />
      </div>
      <ScrollToTop smooth />
      <section id="QuemSomos" className="section">
        <div className="about-us">
          <AboutUs />
        </div>
      </section>
      <section id="Imóveis e Lotes" className="section">
        <div className="lotes">
        <h1>Nossos Lotes</h1>
        <h2>Encontre o ideal para você ⤵ </h2>
        
          {imoveis.map((imovel, index) => (
        <ImovelCard
          key={index}
          titulo={imovel.titulo}
          endereco={imovel.endereco}
          preco={imovel.preco}
          descricao={imovel.descricao}
          imagem={imovel.imagem}
        />
      ))}
        </div>
      </section>
      <div className='background'>
        <div className="background-overlay"></div>
        <img src={backgrounds[currentBackground]} className='background-img' alt="Fundo do site" title="Fundo" />
        <img src={backgrounds[(currentBackground + 1) % backgrounds.length]} className={currentBackground === backgrounds.length - 1 ? 'background-img hidden' : 'background-img'} alt="Fundo do site" title="Fundo" hidden={currentBackground === backgrounds.length - 1} />
      </div>

      <section id="#Fale Conosco" className="section">
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Home;