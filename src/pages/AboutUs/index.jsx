import React from 'react';
import '../../pages/AboutUs/styles.css';
import AboutusBG from '../../assets/img/aboutushabi.png';



function AboutUs() {
  return (
    <div className="content-aboutus">
      <h1>Quem somos</h1>
      <div className="card-aboutus">
        <img src={AboutusBG} alt="Imagem do card" className='style' />
      </div> 
      

    </div>
      

  );
}

export default AboutUs;