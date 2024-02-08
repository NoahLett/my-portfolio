import React, { useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-form-content'>
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name="user_name" placeholder='Your Name' />
            </div>
            <input type="email" name='user_email' placeholder='example@email.com' />
            <textarea name="message" placeholder='Message' rows={3} />

            <button>Send</button>
        </form>
    </div>
  )
}

export default ContactForm