import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <div id='contact' className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div className='box-1'>
              <ContactInfoCard
                iconUrl={'/images/e-mail.png'}
                text={'noahblett96@gmail.com'}  
              />
              <ContactInfoCard
                iconUrl={'/images/github.png'}
                text={'https://github.com/NoahLett'}  
              />
            </div>
            <div className='box-2'>
              <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default ContactMe