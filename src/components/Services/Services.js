import React from 'react';
import './Services.css';

const Services = props => {
  return (
    <section className='w3-card w3-round' id='servicesSection'>
      <div className='w3-container w3-border-bottom'>
        <h1 className='kalamFont'>Car nous vous proposons:</h1>
      </div>
      <div className='w3-row-padding kalamFont'>
        <a href='#plats' className='w3-col s6 m4 l3'>
          <div className='service w3-red'>Cuisine(Africaine & Européenne) &#127830;</div>
        </a>
        <a href='#decoration' className='w3-col s6 m4 l3'>
          <div className='service w3-blue'>Décoration &#127807;</div>
        </a>
        <a href='#patisserie' className='w3-col s6 m4 l3'>
          <div className='service w3-teal'>Mini-Patisserie &#127849;</div>
        </a>
        <a href='#jus' className='w3-col s6 m4 l3'>
          <div className='service w3-pink'>Jus Naturels &#127865;</div>
        </a>
        <a href='#chaises' className='w3-col s6 m4 l3'>
          <div className='service w3-lime'>Location Chaises</div>
        </a>
        <a href='#tentes' className='w3-col s6 m4 l3'>
          <div className='service w3-orange'>Location Tentes &#127914;</div>
        </a>
        <a href='#couverts' className='w3-col s6 m4 l3'>
          <div className='service w3-brown'>Location Couverts &#128280; &#127860;</div>
        </a>
        <a href='#marmites' className='w3-col s6 m4 l3'>
          <div className='service w3-green'>Location Marmites Chauffantes</div>
        </a>
      </div>
    </section>
  );
};

export default Services;