import React from 'react';
import './Contact.css'; // Import page-specific styling

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Introduction Section */}
      <section className="intro-section">
        <h1>Get in Touch</h1>
        <p>
          I’m always excited to hear from potential collaborators, clients, or anyone interested in discussing tech, projects, or opportunities. Feel free to reach out to me through any of the channels below.
        </p>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details">
        <h2>Contact Details</h2>
        <ul>
          <li>
            <i className="fa fa-envelope"></i> 
            <a href="mailto:makakait123@gmail.com">makakait123@gmail.com</a>
          </li>
          <li>
            <i className="fa fa-whatsapp"></i> 
            <a href="https://wa.me/254799066347" target="_blank" rel="noopener noreferrer">+254 799 066 347</a>
          </li>
          <li>
            <i className="fa fa-linkedin"></i> 
            <a href="https://www.linkedin.com/in/dennis-makaka/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <i className="fa fa-github"></i> 
            <a href="https://github.com/DennisMakaka" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h2>Send a Message</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Dennis Makaka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
