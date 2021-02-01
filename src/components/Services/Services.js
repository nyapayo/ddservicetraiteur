import React from 'react';
import './Services.css';

const Services = props => {
  return (
    <section className='w3-card' id='servicesSection'>
      <div className='w3-container w3-border-bottom'>
        <h1 className='kalamFont'>Car nous vous proposons:</h1>
      </div>
      <ul className='w3-ul kalamFont'>
        <li><a href='#plats' className='w3-button w3-block'>Cuisine(Africaine & Européenne)</a></li>
        <li><a href='#decoration' className='w3-button w3-block'>Décoration</a></li>
        <li><a href='#patisserie' className='w3-button w3-block'>Mini-Patisserie</a></li>
        <li><a href='#patisserie' className='w3-button w3-block'>Jus Naturels</a></li>
        <li><a href='chaises' className='w3-button w3-block'>Location Chaises</a></li>
        <li><a href='#tentes' className='w3-button w3-block'>Location Tentes</a></li>
        <li><a href='#couverts' className='w3-button w3-block'>Location Couverts</a></li>
        <li><a href='#marmites' className='w3-button w3-block'>Location Marmites Chauffantes</a></li>
      </ul>
  </section>
  );
};

export default Services;