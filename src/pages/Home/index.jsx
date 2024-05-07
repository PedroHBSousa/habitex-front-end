<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
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
          <li><button href="#Fale Conosco">Fale Conosco</button></li>
        </ul>
      </nav>
      <div className='header'>
      <Header />
      </div>
      <div className="about-us">
        <AboutUs />
      </div>
      <div className="lotes">
        <ImóveisELotes />
      </div>
      <div className='background'>
        <div className="background-overlay"></div>
        <img src={backgrounds[currentBackground]} className='background-img' alt="Fundo do site" title="Fundo" />
      </div>
      <section id="#Footer">
        <div>
          <Footer />
        </div>
      </section>
=======
import Header from "../../global/components/Header";
import Background from "../../global/components/Background";

function Home() {
  const imageUrls = [
    require("../../assets/img/background.jpg"),
    require("../../assets/img/image2.jpg"),
  ];
  const teste = 0;
  return (
    <div>
      <Header />
      <Background imageUrl={imageUrls[teste]} />
>>>>>>> f7e5f23abb8099dbabb39a3b8d9962dddadcc850
    </div>
  );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> f7e5f23abb8099dbabb39a3b8d9962dddadcc850
