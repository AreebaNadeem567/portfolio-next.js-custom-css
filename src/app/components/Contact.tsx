import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form">
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Your Email"
          required
        />
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Your Message"
          rows={3}
          required
        ></textarea>
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;