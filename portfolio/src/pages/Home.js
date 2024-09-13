import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import page-specific styling if needed

const Home = () => {
  return (
    <div className="home-page">
      {/* Intro Section */}
      <section className="intro-section">
        <div className="cover-image">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fquery%3Fq%3Dportfolio&psig=AOvVaw0lzAyJTBemNnNgnsAO265t&ust=1726275021281000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjg1OTZvogDFQAAAAAdAAAAABAE" alt="Cover" />
        </div>
        <div className="intro-content">
          <h1 className="project-name">The Coding Odyssey of Dennis Makaka</h1>
          <p className="project-description">
            Navigating the world of code.
          </p>
          <img
            src="/path/to/your/intro-image.jpg" // Add your image path here
            alt="Intro"
            className="intro-image" // Apply any additional styling as needed
          />
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
          </nav>
          <a
            href="https://dennismakaka.github.io/"
            className="deploy-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Deployed Project
          </a>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature">
            <img src="/path/to/project-showcase-image.jpg" alt="Project Showcase" />
            <h3>Interactive Project Showcase</h3>
            <p>
              Explore high-quality images and screenshots of key projects, including details on the problems they solve, technologies used, and unique achievements.
            </p>
          </div>
          <div className="feature">
            <img src="/path/to/ui-ux-image.jpg" alt="Modern UI/UX" />
            <h3>Modern UI/UX Design</h3>
            <p>
              Discover the modern design and user experience principles that make the portfolio visually appealing and user-friendly, with intuitive navigation and aesthetics.
            </p>
          </div>
          <div className="feature">
            <img src="/path/to/responsive-design-image.jpg" alt="Responsive Design" />
            <h3>Responsive Design</h3>
            <p>
              See how the portfolio adapts seamlessly to different devices, ensuring a consistent and pleasant user experience across desktops, tablets, and mobile phones.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About This Project</h2>
        <p>
          This project was inspired by my journey through coding and my passion for solving real-world problems. The timeline spans several months of intensive work and learning. This is a Portfolio Project for Holberton School.
        </p>
        <p>Check out the project repository on <a href="https://github.com/DennisMakaka/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        <div className="team-links">
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>
    </div>
  );
};

export default Home;

