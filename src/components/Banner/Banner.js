import React from 'react';
import './Banner.css';

const Banner = props => {
  return (
    <section className='w3-container'>
      <div className='w3-card w3-panel'>
        <h1 className='w3-xlarge kalamFont'>Pour toutes vos cérémonies: </h1>
        <div className='w3-panel w3-border w3-purple'>
          <p id='ceremonies' className='w3-large kalamFont'>Mariage, Bâpteme, Messe, Enterrement, Anniversaire, Funérailles, Cocktails, Etc.</p>
        </div>
      </div>
      <div className='w3-panel w3-card w3-padding'>
        <a href='tel: +237-678-511-551' className='w3-small w3-left'>+237 678 511 551</a> 
        <a href='mailto: siakajunior1997@gmail.com' className='w3-small w3-right'>E-mail</a>
      </div>
      <div className='w3-card'>
        <h1 className='w3-panel w3-xlarge kalamFont'>Nous vous proposons:</h1>
        <ul className='w3-ul kalamFont'>
          <li><a href='#plats'>Cuisine(Africaine & Européenne)</a></li>
          <li><a href='#decoration'>Décoration</a></li>
          <li><a href='#patisserie'>Patisserie</a></li>
          <li><a href='chaises'>Chaises</a></li>
          <li><a href='#tentes'>Tentes</a></li>
          <li><a href='#couverts'>Couverts</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;