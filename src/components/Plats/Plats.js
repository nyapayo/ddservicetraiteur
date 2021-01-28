import React from 'react';
import './Plats.css';

const Plats = props => {
  return (
    <section id='plats' className=''>
      <div className=''>
        <h1 className='w3-xlarge w3-container kalamFont w3-text-purple'>Cuisine Africaine et Européenne</h1>
        <div className='w3-row-padding w3-center'>
          <div className='w3-col s4 m4 l4'>
            Entrées entrees
          </div>
          <div className='w3-col s4 m4 l4'>
            Plats plats
          </div>
          <div className='w3-col s4 m4 l4'>
            Désserts desserts
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plats;