import React from 'react';
import './Ceremonies.css';

const Ceremonies = (props) => {
  return (
    <section className='w3-card w3-panel' id='ceremoniesSection'>
      <h1 className='kalamFont'>Pour toutes vos cérémonies: </h1>
      <div className='w3-panel w3-purple'>
        <p id='ceremonies' className='w3-large kalamFont'>Mariage, Bâpteme, Messe, Enterrement, Anniversaire, Funérailles, Cocktails, Etc.</p>
      </div>
      <h1 className='kalamFont'>Dans la région de l'<strong className='w3-text-blue kalamFont'>Ouest</strong></h1>
      <span className='kalamFont'>Et dans tout le <span className='w3-text-blue kalamFont'>Cameroun</span></span>
    </section>
  );
};

export default Ceremonies;