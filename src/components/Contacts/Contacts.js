import React from 'react';
import './Contacts.css';

const Contacts = props => {
  return (
    <section className='w3-card w3-panel kalamFont' id='contactsSection'>
        <h1 className='w3-border-bottom kalamFont'>Contactez-nous directement:</h1>
        <p className='w3-leftbar w3-padding'>Telephone: <a href='tel: +237-678-511-551' className=''>+237 678 511 551</a></p>
        <p className='w3-leftbar w3-padding'>Email: <a href='mailto: siakajunior1997@gmail.com' className=''>siakajunior1997@gmail.com</a></p>
        <p className='w3-leftbar w3-padding'>SMS: <a href='sms: +237-678-511-551'>+237 678 511 551</a></p>
        <p className='w3-leftbar w3-padding'>WhatsApp: <span >+237 678 511 551</span></p>
        <p className='w3-leftbar w3-padding'>Facebook: <a href='' className=''>Link to Facebook page</a></p>
    </section>
  );
};

export default Contacts;