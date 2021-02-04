import React, { useEffect } from 'react';
import './Decoration.css';

const Decoration = props => {

  useEffect(() => {

    return () => {

    }
  });

  return (
    <section className='w3-card w3-panel w3-round' id='decoration'>
      <h1 className='w3-text-blue w3-border-bottom kalamFont'>Décoration</h1>
      <article className='descriptionService'>
        Des décorations des plus stylées et soignées pour des ceremonies reussies
      </article>
      <div className='w3-section'>
        <div>
          <button type='button' className='accordion'>Mariage</button>
          <div className='panel'>
            <h1>Mariage</h1>
          </div>
        </div>
        <div>
          <button type='button' className='accordion'>Enterrement</button>
          <div className='panel'>
            <h1>Enterrement</h1>
          </div>
        </div>
        <div>
          <button type='button' className='accordion'>Funérailles</button>
          <div className='panel'>
            <h1>Funérailles</h1>
          </div>
        </div>
        <div>
          <button type='button' className='accordion'>Messe</button>
          <div className='panel'>
            <h1>Messe</h1>
          </div>
        </div>
        <div>
          <button type='button' className='accordion'>Cocktails</button>
          <div className='panel'>
            <h1>Cocktails</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decoration;