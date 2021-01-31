import React from 'react';
import './Banner.css';

const Banner = props => {
  return (
    <section id='banner' className='w3-container'>
      <div className='w3-card w3-panel'>
        <h1 className='kalamFont'>Pour toutes vos cérémonies: </h1>
        <div className='w3-panel w3-border w3-purple'>
          <p id='ceremonies' className='w3-large kalamFont'>Mariage, Bâpteme, Messe, Enterrement, Anniversaire, Funérailles, Cocktails, Etc.</p>
        </div>
      </div>
      <div className='w3-card w3-panel'>
        <h1 className='kalamFont'>Dans la région de l'<strong className='w3-text-blue'>Ouest</strong></h1>
        <p>Et partout ailleurs au Cameroun</p>
      </div>
      <div className='w3-card w3-panel'>
        <h1 className='w3-text-blue kalamFont'>Contactez-nous directement</h1>
        <p>
          Telephone: <a href='tel: +237-678-511-551' className=''>+237 678 511 551</a>
        </p>
        <p>
          SMS: <a href='sms: +237-678-511-551' className=''>+237 678 511 551</a>  
        </p> 
        <p>
          Email: <a href='mailto: siakajunior1997@gmail.com' className=''>siakajunior1997@gmail.com</a>
        </p>
        <p>
          WhasApp: <span className='w3-tag w3-green'>+237 678 511 551</span>
        </p>
        <p>
          Facebook: <a href='' className=''>Link to Facebook page</a>
        </p>
      </div>
      <div className='w3-card'>
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
        </ul>
      </div>
    </section>
  );
};

export default Banner;