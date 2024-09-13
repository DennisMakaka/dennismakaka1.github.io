import React from 'react';
import './Footer.css'; // If you're using internal CSS for styling

const Footer = () => {
	  return (
		      <footer className="footer">
		        <div className="footer-content">
		          <p>&copy; {new Date().getFullYear()} Dennis Makaka. All rights reserved.</p>
		          <ul className="footer-links">
		            <li><a href="https://github.com/DennisMakaka" target="_blank" rel="noopener noreferrer">GitHub</a></li>
		            <li><a href="mailto:makakait123@gmail.com">Email</a></li>
		          </ul>
		        </div>
		      </footer>
		    );
};

export default Footer;

