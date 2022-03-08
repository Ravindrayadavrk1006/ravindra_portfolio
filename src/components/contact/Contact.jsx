import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {ImWhatsapp} from 'react-icons/im'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b59q58y', 'template_4ewvuzr', form.current, 'Zj0Nl0wrqx_xWvpgY')
      .then((result) => {
          console.log(result.text);
          alert("email send succesfully");
      }, (error) => {
          console.log(error.text);
      });
  };
  const copyFuction=()=>{
    navigator.clipboard.writeText(7719591561);
    alert("phone number copied to clipboard");
  }
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <a target='_blank' href="mailto:ravindrayadavrk1012@gmail.com">
            <MdEmail className="contact__option-icon" ></MdEmail>
            <h4>Email</h4>
            <small>Ravindrayadavrk</small>
            <br />
            <small>1012@gmail.com</small>
            </a>
          </article>
          <article className='contact__option'>
          <a target='_blank' href="https://api.whatsapp.com/send?phone+917719591561">
            <ImWhatsapp className="contact__option-icon"></ImWhatsapp>
            <h4>WhatsApp</h4>
            <h5>7719591561</h5>
           </a>
          </article>
          <article className='contact__option'>
          <a style={{cursor:'pointer'}} onClick={copyFuction}>
            <BsFillTelephoneForwardFill className="contact__option-icon"></BsFillTelephoneForwardFill>
            <h4>Phone</h4>
            <h5>(+91)7719591561</h5>
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='your full name' required/>
          <input type="email"   placeholder="email" name="email" id="Your email" required />
          <textarea name="message" placeholder='Your Message' rows="7"></textarea>
          <button className='btn btn-primary' type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact