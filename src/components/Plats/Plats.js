import React, { useEffect } from 'react';
import './Plats.css';

const Plats = props => {
  useEffect(() => {
    let acc = Array.from(document.querySelectorAll('.accordion')), i;
    for(i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', e => {
        e.target.classList.toggle('active');
        let panel = e.target.nextElementSibling;
        if(panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight+'px';
        }
      }, false);
    }
    return () => {

    }
  })
  return (
    <section className='w3-card w3-panel w3-round' id='plats'>
      <h1 className='w3-text-red w3-border-bottom kalamFont'>Cuisine (Africaine et Européenne)</h1>
      <article className='descriptionService'>
        Nous vous proposons des entrées, des plats qui correspondent aux traditions africaines, de la cuisine
        Européenne repondant aux normes internationnales et des désserts de méilleures
        qualité. 
      </article>
      <div className='w3-section' >
        <div className=''>
          <button type='button' className='accordion'>Entrées</button>
          <article className='panel'>
            <h1>Entrées</h1>
          </article>
        </div>
        <div>
          <button type='button' className='accordion'>Plats</button>
          <article className='panel'>
            <h1>Plats</h1>
          </article>
        </div>
        <div>
          <button type='button' className='accordion'>Désserts</button>
          <article className='panel'>
            <h1>Désserts</h1>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Plats;