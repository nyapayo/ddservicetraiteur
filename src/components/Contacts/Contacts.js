import React from 'react';
import './Contacts.css';

const Contacts = props => {
  return (
    <section className='w3-card w3-panel' id='contactsSection'>
      <h1 className='kalamFont'>Contactez-nous directement:</h1>
        Telephone: <a href='tel: +237-678-511-551' className=''>+237 678 511 551</a>
        Email: <a href='mailto: siakajunior1997@gmail.com' className=''>siakajunior1997@gmail.com</a>
        WhatsApp: <span >+237 678 511 551</span>
        Facebook: <a href='' className=''>Link to Facebook page</a>
    </section>
  );
};

export default Contacts;