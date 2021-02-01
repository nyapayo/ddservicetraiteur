import React from 'react';
import './Ceremonies.css';

const Ceremonies = (props) => {
  return (
    <section className='w3-card w3-panel' id='ceremoniesSection'>
      <h1 className='hindFont'>Pour toutes vos cérémonies: </h1>
      <div className='w3-panel w3-border w3-purple'>
        <p id='ceremonies' className='w3-large'>Mariage, Bâpteme, Messe, Enterrement, Anniversaire, Funérailles, Cocktails, Etc.</p>
      </div>
      <h1 className=''>Dans la région de l'<strong className='w3-text-blue'>Ouest</strong></h1>
      <span className=''>Et dans tout le Cameroun</span>
    </section>
  );
};

export default Ceremonies;