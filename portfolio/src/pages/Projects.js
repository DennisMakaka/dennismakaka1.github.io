import React from 'react';
import './Projects.css'; // Import page-specific styling if needed

const Projects = () => {
  return (
    <div className="projects-page">
      {/* Intro Section */}
      <section id="projects">
        <div className="intro-text">
          <h2>My Projects</h2>
          <p>
            In this section, you will find a curated selection of my key projects, each showcasing a blend of technical expertise and innovative problem-solving. These projects span various technologies and methodologies, reflecting my commitment to delivering high-quality, impactful solutions. Each project is an example of my ability to tackle complex challenges and develop robust applications that meet real-world needs. Explore the details below to gain insight into my development process and the results achieved.
          </p>
        </div>

        <div className="project-list">
          <div className="project-card">
            <img src="path/to/printf-image.jpg" alt="printf" />
            <h3>printf</h3>
            <p>
              A custom implementation of the standard C library function `printf`, demonstrating proficiency in C and understanding of variadic functions.
            </p>
          </div>
          <div className="project-card">
            <img src="path/to/monty-image.jpg" alt="Monty" />
            <h3>Monty</h3>
            <p>
              A simple interpreter for Monty bytecode files, showcasing skills in parsing and bytecode execution.
            </p>
            <a href="https://github.com/DennisMakaka/Smartspend-Budgeting-System" className="view-more" target="_blank" rel="noopener noreferrer">View More</a>
          </div>
          <div className="project-card">
            <img src="https://i.ytimg.com/vi/cbOYUL6wCVc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBX_ZX4XYRDoArW8hjn9c2yIdkWjQ" alt="Airbnb Clone" />
            <h3>Airbnb Clone</h3>
            <p>
              A web application replicating Airbnb's functionalities, including booking and user management features.
            </p>
          </div>
          <div className="project-card">
            <img src="path/to/simple-shell-image.jpg" alt="Simple Shell" />
            <h3>Simple Shell</h3>
            <p>
              A custom shell implementation in C, focusing on command parsing, execution, and environment management.
            </p>
            <a href="https://github.com/DennisMakaka/AirBnB_clone" className="view-more" target="_blank" rel="noopener noreferrer">View More</a>
          </div>
          <div className="project-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBV6U2nj8nacGOXm45c8lvEpPch56LCLT-pQ&s" alt="RSA Factoring" />
            <h3>RSA Factoring</h3>
            <p>
              An implementation of RSA factoring algorithms, highlighting knowledge of cryptography and number theory.
            </p>
            <a href="https://github.com/DennisMakaka/RSA-Factoring-Challenge" className="view-more" target="_blank" rel="noopener noreferrer">View More</a>
          </div>
          <div className="project-card">
            <img src="path/to/smartspend-image.jpg" alt="SmartSpend Budget Management System" />
            <h3>SmartSpend Budget Management System</h3>
            <p>
              SmartSpend Budget Management System is designed to simplify the way users track and manage their daily expenditures. This system addresses common issues such as the inability to keep accurate records of expenses and the difficulty in remembering scheduled payments. The system enables users to create accounts, log in, set reminders for scheduled payments, view daily expenses through pie charts, and save their expense records for future reference. The system's efficiency relies on user input, requiring accurate data entry for effective financial management.
            </p>
            <a href="https://github.com/DennisMakaka/Smartspend-Budgeting-System" className="view-more" target="_blank" rel="noopener noreferrer">View More</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="projects-footer">
        <p>© {new Date().getFullYear()} Dennis Anyende Makaka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
