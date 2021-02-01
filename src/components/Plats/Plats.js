import React from 'react';
import './Plats.css';

const Plats = props => {
  return (
    <section className='w3-card w3-panel' id='plats'>
      <h1 className='w3-text-purple'>Cuisine Africaine et Européenne</h1>
      <div className='w3-row'>
        <div className='w3-col s4 m4 l4'>
          Entrées
        </div>
        <div className='w3-col s4 m4 l4'>
          Plats
        </div>
        <div className='w3-col s4 m4 l4'>
          Désserts
        </div>
      </div>
    </section>
  );
};

export default Plats;