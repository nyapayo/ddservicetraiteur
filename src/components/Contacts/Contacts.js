import React from 'react';
import './Contacts.css';

const Contacts = props => {
  return (
    <section className='w3-card w3-panel kalamFont' id='contactsSection'>
      <h1 className='kalamFont'>Contactez-nous directement:</h1>
        <p>Telephone: <a href='tel: +237-678-511-551' className=''>+237 678 511 551</a></p>
        <p>Email: <a href='mailto: siakajunior1997@gmail.com' className=''>siakajunior1997@gmail.com</a></p>
        <p>SMS: <a href='sms: +237-678-511-551'>+237 678 511 551</a></p>
        <p>WhatsApp: <span >+237 678 511 551</span></p>
        <p>Facebook: <a href='' className=''>Link to Facebook page</a></p>
    </section>
  );
};

export default Contacts;