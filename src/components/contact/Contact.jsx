import React,{ useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
//emailjs part left

const Contact = () => {

  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gzh330m', 'template_2055mgm', form.current, 'Ux9j6IN18isxXxQAZ')
     e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>utkarshkesharwani3@gmail.com</h5>
          <a href="mailto:Utkarshkesharwani3@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>uk</h5>
          <a href="https://m.me/utkarsh.kesharwani.39" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatAapp</h4>
          <h5>8009772122</h5>
          <a href="https://api.whatsapp.com/send?phone=+918009772122 " target='_blank'>Send a message</a>
        </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
