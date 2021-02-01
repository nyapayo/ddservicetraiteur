import React from 'react';
import './Services.css';

const Services = props => {
  return (
    <section className='w3-card' id='servicesSection'>
      <div className='w3-container w3-blue'>
        <h1 className='kalamFont'>Car nous vous proposons:</h1>
      </div>
      <ul className='w3-ul kalamFont'>
        <li><a href='#plats'>Cuisine(Africaine & Européenne)</a></li>
        <li><a href='#decoration'>Décoration</a></li>
        <li><a href='#patisserie'>Mini-Patisserie</a></li>
        <li><a href='#patisserie'>Jus Naturels</a></li>
        <li><a href='chaises'>Location Chaises</a></li>
        <li><a href='#tentes'>Location Tentes</a></li>
        <li><a href='#couverts'>Location Couverts</a></li>
        <li><a href='#marmites'>Location Marmites Chauffantes</a></li>
      </ul>
  </section>
  );
};

export default Services;