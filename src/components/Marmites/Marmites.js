import React from 'react';
import './Marmites.css';

const Marmites = props => {

  return (
    <section className='w3-card w3-panel w3-round' id='marmites'>
      <h1 className='w3-text-green w3-border-bottom kalamFont'>Mamites Chauffantes</h1>
      <article className='descriptionService'>
        Marmites chauffantes pour maintenir constament les menus de votre buffet chaud
      </article>
      <div className='w3-section'>
        <h4>Slideshow</h4>
      </div>
    </section>
  );
}

export default Marmites;