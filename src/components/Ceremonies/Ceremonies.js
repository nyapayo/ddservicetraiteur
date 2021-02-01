import React, { useEffect } from 'react';
import './Ceremonies.css';

const Ceremonies = (props) => {
  useEffect(() => {

    let slideIndex = 0;

    carousel();

    function carousel() {
      let i;
      // Get all ceremonies slide
      let x = document.querySelectorAll('.ceremonie');
      // Hide all slides
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
      }
      slideIndex++;
      if(slideIndex > x.length) {
        slideIndex = 1;
      }
      x[slideIndex-1].style.display = 'block';
      window.setTimeout(carousel, 2000);
    }
    return () => {
      window.clearTimeout(carousel);
    }
  });

  return (
    <section className='w3-card w3-panel' id='ceremoniesSection'>
      <h1 className='w3-border-bottom kalamFont'>Pour toutes vos cérémonies: </h1>
      <div className='w3-center w3-xlarge'>
        <div className='ceremonie w3-panel w3-purple w3-animate-top w3-padding-16 kalamFont'>
          Mariage
        </div>
        <div className='ceremonie w3-panel w3-white w3-card w3-animate-top w3-padding-16 kalamFont'>
          Bâpteme
        </div>
        <div className='ceremonie w3-panel w3-blue w3-animate-top w3-padding-16 kalamFont'>
          Messe
        </div>
        <div className='ceremonie w3-panel w3-black w3-animate-top w3-padding-16 kalamFont'>
          Enterrement
        </div>
        <div className='ceremonie w3-panel w3-pink w3-animate-top w3-padding-16 kalamFont'>
          Anniversaire
        </div>
        <div className='ceremonie w3-panel w3-black w3-animate-top w3-padding-16 kalamFont'>
          Funérailles
        </div>
        <div className='ceremonie w3-panel w3-green w3-animate-top w3-padding-16 kalamFont'>
          Cocktails
        </div>
        <div className='ceremonie w3-panel w3-sand w3-animate-bottom w3-padding-16 kalamFont'>
          Et bien d'autres!
        </div>
      </div>
      <h1 className='w3-border-bottom kalamFont'>Dans la région de l'<strong className='w3-text-blue kalamFont'>Ouest</strong></h1>
      <span className='kalamFont'>Et dans tout le <span className='w3-text-blue kalamFont'>Cameroun</span></span>
    </section>
  );
};

export default Ceremonies;