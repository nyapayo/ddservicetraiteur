import React from 'react';
import './Patisserie.css';

const Patisserie = props => {

  return (
    <section className='w3-card w3-panel w3-round' id='patisserie'>
      <h1 className='w3-text-teal w3-border-bottom kalamFont'>Patisserie</h1>
      <article className='descriptionService'>
        Dégustez de la patisserie faite entièrement maison et très bon prix!
      </article>
      <div className='w3-section'>
        <h4>Slideshow</h4>
      </div>
    </section>
  );
};

export default Patisserie;