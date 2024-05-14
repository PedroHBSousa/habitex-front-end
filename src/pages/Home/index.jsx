import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Header from '../../global/Components/Header';
import AboutUs from '../AboutUs';
import ImóveisELotes from '../ImóveisELotes';
import Footer from '../../global/Components/Footer';
//import Logo from '../../assets/img/logo.png';
import Background from '../../assets/img/bg.jpg';
import Background2 from '../../assets/img/bg2.jpg';
import Background3 from '../../assets/img/bg3.jpg';
import Background4 from '../../assets/img/bg4.jpg';
import './styles.css';


function Home() {
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
          <h1>Habitex<span>group</span></h1>
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
          <ImóveisELotes />
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