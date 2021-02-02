import React from 'react';
import './Services.css';

const Services = props => {
  return (
    <section className='w3-card' id='servicesSection'>
      <div className='w3-container w3-border-bottom'>
        <h1 className='kalamFont'>Car nous vous proposons:</h1>
      </div>
      <div className='w3-row-padding kalamFont'>
        <a href='#plats' className='w3-col s6 m4 l3'>
          <div className='service w3-red'>Cuisine(Africaine & Européenne)</div>
        </a>
        <a href='#decoration' className='w3-col s6 m4 l3'>
          <div className='service w3-blue'>Décoration</div>
        </a>
        <a href='#patisserie' className='w3-col s6 m4 l3'>
          <div className='service w3-teal'>Mini-Patisserie</div>
        </a>
        <a href='#jus' className='w3-col s6 m4 l3'>
          <div className='service w3-pink'>Jus Naturels</div>
        </a>
        <a href='#chaises' className='w3-col s6 m4 l3'>
          <div className='service w3-lime'>Location Chaises</div>
        </a>
        <a href='#tentes' className='w3-col s6 m4 l3'>
          <div className='service w3-orange'>Location Tentes</div>
        </a>
        <a href='#couverts' className='w3-col s6 m4 l3'>
          <div className='service w3-brown'>Location Couverts</div>
        </a>
        <a href='#marmites' className='w3-col s6 m4 l3'>
          <div className='service w3-green'>Location Marmites Chauffantes</div>
        </a>
      </div>
  </section>
  );
};

export default Services;