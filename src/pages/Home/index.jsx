import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Header from '../../global/Components/Header';
import AboutUs from '../AboutUs';
import Footer from '../../global/Components/Footer';
import Logo from '../../assets/img/logo 1.svg';
import Background from '../../assets/img/bg.png';
import Background2 from '../../assets/img/bg2.png';
import Background3 from '../../assets/img/bg3.png';
import Background4 from '../../assets/img/bg4.png';
import './styles.css';
import ImoveisELotes from '../ImoveisELotes/ImovelCard';
//import ImóveisELotes from '../../pages/ImóveisELotes';
//import ImovelCard from '../ImóveisELotes/ImovelCard';



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
          <img src={Logo} alt="logo-habitex" className='logo' />
          <li><button onClick={() => window.location.href="#QuemSomos"}>Quem Somos</button></li>
<li><button onClick={() => window.location.href="#Imóveis e Lotes"}>Imóveis e Lotes</button></li>
<li><button onClick={() => window.location.href="https://api.whatsapp.com/send/?phone=5511977377113&text=Bom+dia%2C+poderiam+me+apresentar+alguns+im%C3%B3veis%3F&type=phone_number&app_absent=0"}>Fale Conosco</button></li>

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
      <div className='background'>
        <div className="background-overlay"></div>
        <img src={backgrounds[currentBackground]} className='background-img' alt="Fundo do site" title="Fundo" />
        <img src={backgrounds[(currentBackground + 1) % backgrounds.length]} className={currentBackground === backgrounds.length - 1 ? 'background-img hidden' : 'background-img'} alt="Fundo do site" title="Fundo" hidden={currentBackground === backgrounds.length - 1} />
      </div>
      <section id="Imóveis e Lotes" className="section">
        <div className="lotes">
          <h1>Nossos Imóveis</h1>
          <h2>Encontre o ideal para você ⤵ </h2>
          <ImoveisELotes />
          
        </div>

      </section>
      <Footer />
    </div>
  );
}

export default Home;