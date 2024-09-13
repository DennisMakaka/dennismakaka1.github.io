import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // If you're using internal CSS for styling

const Navbar = () => {
	  return (
		      <nav className="navbar">
		        <ul>
		          <li><Link to="/">Home</Link></li>
		          <li><Link to="/about">About</Link></li>
		          <li><Link to="/blog">Blog</Link></li>
		          <li><Link to="/contact">Contact</Link></li>
		          <li><Link to="/projects">Projects</Link></li>
		        </ul>
		      </nav>
		    );
};

export default Navbar;

