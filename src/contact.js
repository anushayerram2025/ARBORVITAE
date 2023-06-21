import React, { useState } from 'react';
import Navbar from './navbar.js';

function ContactPage() {
  const [formData, setFormData] = useState({
    fname: '',
    fmail: '',
    text: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString()
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setFormData({ fname: "", fmail: "", text: "" });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="fname" id="name" value={formData.fname} onChange={handleChange} required />
          <label htmlFor="email">Email:</label>
          <input type="email" name="fmail" id="email" value={formData.fmail} onChange={handleChange} required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="text" value={formData.text} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
