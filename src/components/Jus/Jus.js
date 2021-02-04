import React from 'react';
import './Jus.css';

const Jus = props => {

  return (
    <section className='w3-card w3-panel w3-round' id='jus'>
      <h1 className='w3-text-pink w3-border-bottom kalamFont'>Jus Naturels</h1>
      <article className='descriptionService'>
        Jus entièrement naturels à base de fruits tels que l'ananas, la papaye, 
        l'orange, fruits de la passion, la goyave, etc.
      </article>
      <div className='w3-section'>
        <h4>Slideshow</h4>
      </div>
    </section>
  );
};

export default Jus;