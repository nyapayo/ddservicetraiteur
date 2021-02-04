import React from 'react';
import './Couverts.css';

const Couverts = props => {
  return (
    <section className='w3-card w3-panel w3-round' id='couverts'>
      <h1 className='w3-text-brown w3-border-bottom kalamFont'>Couverts</h1>
      <article className='descriptionService'>
        Services reuissis grace à nos couverts de meilleure qualité.
      </article>
      <div className='w3-section'>
        <h4>Slideshow</h4>
      </div>
    </section>
  );
};

export default Couverts;